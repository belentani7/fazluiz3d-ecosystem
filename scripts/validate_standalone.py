from pathlib import Path
from bs4 import BeautifulSoup
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
html_files = sorted(ROOT.rglob('*.html'))
errors = []
summary = []
for html_path in html_files:
    text = html_path.read_text(encoding='utf-8', errors='replace')
    soup = BeautifulSoup(text, 'html.parser')
    ids = [tag.get('id') for tag in soup.find_all(attrs={'id': True})]
    duplicates = sorted({value for value in ids if ids.count(value) > 1})
    if duplicates:
        errors.append(f'{html_path.relative_to(ROOT)} duplicate ids: {duplicates}')
    for tag in soup.find_all(['img', 'script', 'link']):
        attr = 'src' if tag.name in {'img', 'script'} else 'href'
        ref = tag.get(attr)
        if not ref or ref.startswith(('http://', 'https://', '#', 'data:', 'mailto:')):
            continue
        candidate = (html_path.parent / ref.split('#')[0].split('?')[0]).resolve()
        if not candidate.exists():
            errors.append(f'{html_path.relative_to(ROOT)} missing {attr}: {ref}')
    external_runtime = re.findall(r'<(?:script|link)[^>]+(?:src|href)=["\']https?://', text, flags=re.I)
    if external_runtime:
        errors.append(f'{html_path.relative_to(ROOT)} has external runtime resources: {len(external_runtime)}')
    summary.append({'file': str(html_path.relative_to(ROOT)), 'images': len(soup.find_all('img')), 'scripts': len(soup.find_all('script'))})

manifest = ROOT / 'assets/manifest.json'
if not manifest.exists():
    errors.append('assets/manifest.json missing')
else:
    assets = json.loads(manifest.read_text(encoding='utf-8'))
    if len(assets) != 20:
        errors.append(f'expected 20 optimized assets, found {len(assets)}')

personal = ROOT / 'docs/personal/DEDICATORIA-para-Thiago.txt'
if not personal.exists():
    errors.append('personal dedication missing')

report = {'root': str(ROOT), 'html_files': summary, 'optimized_assets': len(json.loads(manifest.read_text(encoding='utf-8'))) if manifest.exists() else 0, 'errors': errors}
(ROOT / 'audit/standalone-validation.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(report, ensure_ascii=False, indent=2))
sys.exit(1 if errors else 0)
