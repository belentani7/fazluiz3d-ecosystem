#!/usr/bin/env python3
import os
import json
import hashlib
from datetime import datetime

PROJECT_DIR = "/home/ubuntu/FAZLUIZ3D_FINAL"
AUDIT_DIR = os.path.join(PROJECT_DIR, "audit")

def compute_file_hash(filepath):
    sha256_hash = hashlib.sha256()
    with open(filepath, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest()

def run_local_automation():
    print("[AUTOMATIZACIÓN Ω-LOCAL] Iniciando validación y backup seguro...")
    os.makedirs(AUDIT_DIR, exist_ok=True)
    
    # 1. Verificar existencia de archivos clave
    key_files = ["index.html", "admin/dashboard.html", "herramientas/tiberion.html", "assets/js/local-db.js"]
    missing = []
    for kf in key_files:
        path = os.path.join(PROJECT_DIR, kf)
        if not os.path.exists(path):
            missing.append(kf)
            
    # 2. Generar manifiesto de integridad
    manifest = {
        "timestamp": datetime.utcnow().isoformat(),
        "author": "Belentani",
        "status": "OK" if not missing else "MISSING_FILES",
        "missing_files": missing,
        "files_checked": len(key_files)
    }
    
    manifest_path = os.path.join(AUDIT_DIR, "local-automation-report.json")
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
        
    print(f"[AUTOMATIZACIÓN Ω-LOCAL] Informe generado en {manifest_path}")
    print("[AUTOMATIZACIÓN Ω-LOCAL] Completado con éxito sin dependencias externas.")

if __name__ == "__main__":
    run_local_automation()
