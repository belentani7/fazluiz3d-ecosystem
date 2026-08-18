from pathlib import Path
from PIL import Image, ImageOps
import shutil
import json

SOURCE = Path('/home/ubuntu/FOTOS_THIAGO')
PROJECT = Path('/home/ubuntu/FAZLUIZ3D_FINAL')
ORIGINALS = PROJECT / 'assets/img/originals'
OPTIMIZED = PROJECT / 'assets/img/optimized'
ORIGINALS.mkdir(parents=True, exist_ok=True)
OPTIMIZED.mkdir(parents=True, exist_ok=True)

mapping = {
    'hero-part_.png': 'hero-part',
    'material-carbon_.png': 'material-carbon',
    'material-nylon_.png': 'material-nylon',
    'material-resin_.png': 'material-resin',
    'project-architecture_.png': 'project-architecture',
    'project-industrial_.png': 'project-industrial',
    'project-nautical_.png': 'project-nautical',
    'workshop_.png': 'workshop',
    'NoteGPT_Image_20260705034735_.png': 'thiago-vision-01',
    'file_000000002acc71f48d1f17e1ccfbedbb (1)_.png': 'thiago-vision-02',
    'file_000000003ff871f4bd1350c8a21bf873_.png': 'thiago-vision-03',
    'file_00000000624c71f4931ece02dd81d1a5 (1)_.png': 'thiago-vision-04',
    'file_000000006edc71f4beef9bc806713971 (2)_.png': 'thiago-vision-05',
    'file_0000000079dc71f48827a007970a9c68_.png': 'thiago-portrait',
    'file_00000000879471f4aa9c23310c17e98e_.png': 'thiago-vision-06',
    'file_00000000984c71f4af7371d70aab9094_.png': 'thiago-vision-07',
    'file_00000000bda071f497ff112234f2bdc4 (1)_.png': 'thiago-vision-08',
    'file_00000000bffc71f48862b03d235795e2.jpg': 'thiago-workspace',
    'file_00000000d1e871f49b2bb7cf22f14e14_.png': 'thiago-vision-09',
    'file_00000000d3cc71f49fff159802b39f10 (1)_.png': 'thiago-vision-10',
}

manifest = []
for source_name, stem in mapping.items():
    src = SOURCE / source_name
    if not src.exists():
        raise FileNotFoundError(src)
    shutil.copy2(src, ORIGINALS / src.name)
    with Image.open(src) as raw:
        image = ImageOps.exif_transpose(raw).convert('RGB')
        image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
        out = OPTIMIZED / f'{stem}.webp'
        image.save(out, 'WEBP', quality=84, method=6)
        manifest.append({
            'source': source_name,
            'asset': f'assets/img/optimized/{stem}.webp',
            'width': image.width,
            'height': image.height,
            'bytes': out.stat().st_size,
        })

(PROJECT / 'assets/manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'count': len(manifest), 'optimized_bytes': sum(item['bytes'] for item in manifest)}, ensure_ascii=False))
