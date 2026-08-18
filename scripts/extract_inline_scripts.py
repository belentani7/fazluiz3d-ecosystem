from pathlib import Path
from bs4 import BeautifulSoup

root = Path(__file__).resolve().parents[1]
out = root / 'audit/inline-scripts'
out.mkdir(parents=True, exist_ok=True)
for html in root.rglob('*.html'):
    soup = BeautifulSoup(html.read_text(encoding='utf-8', errors='replace'), 'html.parser')
    for index, script in enumerate(soup.find_all('script')):
        if script.get('src') or not script.string:
            continue
        target = out / f'{html.stem}-{index:02d}.js'
        target.write_text(script.string, encoding='utf-8')
        print(target)
