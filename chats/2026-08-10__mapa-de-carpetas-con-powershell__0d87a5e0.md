# Mapa de Carpetas con PowerShell

- Chat ID: `0d87a5e0-575d-493a-9efc-1ef815a59cf4`
- Mensajes: 2
- Periodo: 2026-08-10 19:40 UTC → 2026-08-10 19:40 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-10 19:40

un programa que corre el power shell y te da un mapa detallado extremo de todo elk poc carpeta archivos contenido images que son videos de que son intuitivo

## [ASSISTANT] 2026-08-10 19:40 · Qwen3.8-Max

Te dejo un **programa completo en PowerShell** para generar un **mapa extremo/detallado** de una carpeta o unidad: árboles de carpetas, archivos, tamaños, fechas, categorías, detección de imágenes/videos/audio por extensión y por cabecera/magic bytes, hash opcional, dimensiones de imágenes, duración/codecs de video si tienes `ffprobe`, informe HTML intuitivo, CSV, JSON y árbol en texto.

> Importante: PowerShell puede hacer un mapa estructural muy detallado y clasificar por formato/metadata.  
> Pero **no puede saber “qué hay dentro” de una imagen o video** en plan semántico —por ejemplo: “es un gato”, “es una factura”, “es un partido de fútbol”— salvo que añadas OCR/IA/visión artificial. Este script deja la base preparada y clasifica por tipo real, dimensiones, duración, codec, etc.

---

## Programa: `Invoke-MapaExtremo.ps1`

Guarda esto como:

```text
Invoke-MapaExtremo.ps1
```

```powershell
# ============================================================================
# Invoke-MapaExtremo.ps1
# Genera un mapa detallado de carpetas/archivos + informe HTML/CSV/JSON/TXT.
# Clasifica imágenes, videos, audio, documentos, código, comprimidos, etc.
# Opcional: hash SHA256, dimensiones de imágenes, metadata con ffprobe,
#           vista previa de texto.
# ============================================================================

[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string]$Ruta = (Get-Location).Path,

    [Parameter(Position = 1)]
    [string]$Salida = "",

    # 0 = sin límite. 1 = solo raíz + 1 nivel, etc.
    [int]$MaxProfundidad = 0,

    # Máximo de filas mostradas en la tabla principal del HTML.
    [int]$MaxFilasHtml = 5000,

    # Calcula SHA256 de cada archivo. Puede ser lento en discos grandes.
    [switch]$IncluirHash,

    # Intenta obtener ancho/alto de imágenes usando System.Drawing.
    [switch]$AnalizarImagenes,

    # Si ffprobe.exe existe en PATH, intenta obtener duración/codec/ancho/alto.
    [switch]$AnalizarMultimedia,

    # Desactiva la detección por cabecera/magic bytes.
    [switch]$NoDetectarMagic,

    # Lee una vista previa pequeña de archivos de texto/código/datos.
    [switch]$ExtraerTexto,

    # Abre el informe HTML al terminar.
    [switch]$AbrirInforme
)

$ErrorActionPreference = 'SilentlyContinue'

# ----------------------------------------------------------------------------
# Carpeta de salida
# ----------------------------------------------------------------------------
if ([string]::IsNullOrWhiteSpace($Salida)) {
    $Salida = Join-Path ([Environment]::GetFolderPath('Desktop')) ("MapaExtremo_" + (Get-Date -Format 'yyyyMMdd_HHmmss'))
}

New-Item -ItemType Directory -Force -Path $Salida | Out-Null

# ----------------------------------------------------------------------------
# Resolver ruta
# ----------------------------------------------------------------------------
try {
    $rutaResuelta = (Resolve-Path -LiteralPath $Ruta -ErrorAction Stop).Path
}
catch {
    Write-Error "No existe o no se puede resolver la ruta: $Ruta"
    return
}

$archivoUnico = $null
if (Test-Path -LiteralPath $rutaResuelta -PathType Leaf) {
    $archivoUnico = $rutaResuelta
    $rutaCompleta = Split-Path -LiteralPath $rutaResuelta -Parent
}
else {
    $rutaCompleta = $rutaResuelta
}

# ----------------------------------------------------------------------------
# Capacidades opcionales
# ----------------------------------------------------------------------------
$script:drawingDisponible = $false
try {
    Add-Type -AssemblyName System.Drawing
    if ([System.Drawing.Image]) { $script:drawingDisponible = $true }
}
catch {
    $script:drawingDisponible = $false
}

$script:ffprobePath = (Get-Command ffprobe -ErrorAction SilentlyContinue).Source

# ----------------------------------------------------------------------------
# Extensiones -> categoría
# ----------------------------------------------------------------------------
$script:extensionesCategoria = @{
    'Imagen'       = @(
        '.jpg', '.jpeg', '.jpe', '.jfif', '.png', '.gif', '.bmp', '.dib',
        '.tif', '.tiff', '.webp', '.heic', '.heif', '.avif', '.ico', '.svg',
        '.raw', '.cr2', '.nef', '.arw'
    )
    'Video'        = @(
        '.mp4', '.m4v', '.mov', '.qt', '.avi', '.mkv', '.webm', '.wmv',
        '.asf', '.flv', '.f4v', '.mpg', '.mpeg', '.mpe', '.m1v', '.m2v',
        '.3gp', '.3g2', '.ts', '.mts', '.m2ts', '.vob', '.ogv', '.rm',
        '.rmvb', '.divx'
    )
    'Audio'        = @(
        '.mp3', '.mp2', '.wav', '.flac', '.aac', '.m4a', '.m4b', '.ogg',
        '.oga', '.opus', '.wma', '.mid', '.midi', '.aif', '.aiff', '.au',
        '.amr'
    )
    'Documento'    = @(
        '.pdf', '.doc', '.docx', '.rtf', '.odt', '.epub', '.mobi',
        '.xls', '.xlsx', '.ods', '.ppt', '.pptx', '.odp', '.vsd', '.vsdx'
    )
    'Texto'        = @(
        '.txt', '.log', '.md', '.markdown', '.csv', '.tsv', '.rst'
    )
    'Datos'        = @(
        '.json', '.xml', '.yaml', '.yml', '.ini', '.toml', '.env',
        '.cfg', '.conf', '.properties'
    )
    'Codigo'       = @(
        '.ps1', '.psm1', '.psd1', '.bat', '.cmd', '.sh', '.py', '.ipynb',
        '.js', '.jsx', '.ts', '.tsx', '.html', '.htm', '.css', '.cs',
        '.vb', '.cpp', '.c', '.h', '.hpp', '.java', '.rb', '.go', '.rs',
        '.php', '.sql', '.r', '.lua', '.pl', '.swift', '.kt'
    )
    'Comprimido'   = @(
        '.zip', '.rar', '.7z', '.tar', '.gz', '.tgz', '.bz2', '.tbz2',
        '.xz', '.txz', '.cab', '.iso', '.vhd', '.vhdx', '.wim'
    )
    'Sistema'      = @(
        '.exe', '.dll', '.msi', '.msp', '.sys', '.drv', '.ocx', '.scr',
        '.cpl', '.lnk', '.url', '.reg'
    )
    'Fuente'       = @(
        '.ttf', '.otf', '.woff', '.woff2', '.fon', '.fnt'
    )
    'Modelo3D'     = @(
        '.obj', '.fbx', '.stl', '.gltf', '.glb', '.3ds', '.blend',
        '.dxf', '.dwg'
    )
    'BaseDeDatos'  = @(
        '.db', '.db3', '.sqlite', '.sqlite3', '.sdf', '.mdb', '.accdb'
    )
}

$script:extensionLookup = @{}
foreach ($categoria in $script:extensionesCategoria.Keys) {
    foreach ($extension in $script:extensionesCategoria[$categoria]) {
        $script:extensionLookup[$extension] = $categoria
    }
}

function Get-CategoriaExtension([string]$Extension) {
    if ([string]::IsNullOrEmpty($Extension)) { return 'Otro' }
    $ext = $Extension.ToLowerInvariant()
    if ($script:extensionLookup.ContainsKey($ext)) { return $script:extensionLookup[$ext] }
    return 'Otro'
}

# ----------------------------------------------------------------------------
# Utilidades
# ----------------------------------------------------------------------------
function Format-Tamano([long]$Bytes) {
    if ($null -eq $Bytes) { return '' }
    $unidades = @('B', 'KB', 'MB', 'GB', 'TB', 'PB')
    $i = 0
    $numero = [double]$Bytes

    while ($numero -ge 1024 -and $i -lt ($unidades.Count - 1)) {
        $numero /= 1024
        $i++
    }

    if ($i -eq 0) { return "{0} {1}" -f $Bytes, $unidades[$i] }
    return "{0:N2} {1}" -f $numero, $unidades[$i]
}

function Format-Duracion($Segundos) {
    if ($null -eq $Segundos -or $Segundos -eq '') { return '' }
    try {
        $ts = [TimeSpan]::FromSeconds([double]$Segundos)
        return ('{0}:{1:D2}:{2:D2}' -f [int]$ts.TotalHours, $ts.Minutes, $ts.Seconds)
    }
    catch {
        return ''
    }
}

function Get-RutaRelativa([string]$FullPath, [string]$Root) {
    if ([string]::IsNullOrEmpty($FullPath)) { return '' }

    $root = $Root.TrimEnd('\', '/')
    if ([string]::IsNullOrEmpty($root)) { $root = $Root }

    if ($FullPath.Equals($Root, [System.StringComparison]::OrdinalIgnoreCase) -or
        $FullPath.Equals($root, [System.StringComparison]::OrdinalIgnoreCase)) {
        return '.'
    }

    if ($FullPath.StartsWith($root + '\', [System.StringComparison]::OrdinalIgnoreCase)) {
        return $FullPath.Substring(($root + '\').Length)
    }

    if ($FullPath.StartsWith($root + '/', [System.StringComparison]::OrdinalIgnoreCase)) {
        return $FullPath.Substring(($root + '/').Length)
    }

    if ($root.Length -gt 0 -and $FullPath.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
        return $FullPath.Substring($root.Length).TrimStart('\', '/')
    }

    return $FullPath
}

function Get-BytesInicio([string]$Path, [int]$Count = 512) {
    $fs = $null
    try {
        $fs = [System.IO.File]::Open(
            $Path,
            [System.IO.FileMode]::Open,
            [System.IO.FileAccess]::Read,
            [System.IO.FileShare]::ReadWrite
        )

        $buffer = New-Object byte[] $Count
        $read = $fs.Read($buffer, 0, $Count)

        if ($read -eq 0) { return @() }

        if ($read -lt $Count) {
            $tmp = New-Object byte[] $read
            [Array]::Copy($buffer, $tmp, $read)
            return , $tmp
        }

        return , $buffer
    }
    catch {
        return @()
    }
    finally {
        if ($fs) { $fs.Dispose() }
    }
}

function Get-AsciiSegment([byte[]]$Bytes, [int]$Start, [int]$Length) {
    if ($null -eq $Bytes -or $Bytes.Count -lt ($Start + $Length)) { return '' }
    return [System.Text.Encoding]::ASCII.GetString($Bytes, $Start, $Length)
}

function Get-TipoReal {
    param(
        [byte[]]$Bytes,
        [string]$Extension,
        [string]$CategoriaExtension
    )

    if (-not $Bytes -or $Bytes.Count -eq 0) {
        return [pscustomobject]@{ Categoria = 'Otro'; Tipo = 'Vacío' }
    }

    $hex = [BitConverter]::ToString($Bytes).Replace('-', '')
    $ascii = [System.Text.Encoding]::ASCII.GetString($Bytes)
    $ext = if ([string]::IsNullOrEmpty($Extension)) { '' } else { $Extension.ToLowerInvariant() }

    # Imágenes comunes
    if ($hex -like 'FFD8FF*') { return [pscustomobject]@{ Categoria = 'Imagen'; Tipo = 'JPEG' } }
    if ($hex -like '89504E470D0A1A0A*') { return [pscustomobject]@{ Categoria = 'Imagen'; Tipo = 'PNG' } }
    if ($ascii.StartsWith('GIF8')) { return [pscustomobject]@{ Categoria = 'Imagen'; Tipo = 'GIF' } }
    if ($hex -like '424D*') { return [pscustomobject]@{ Categoria = 'Imagen'; Tipo = 'BMP' } }
    if ($hex -like '49492A00*' -or $hex -like '4D4D002A*') { return [pscustomobject]@{ Categoria = 'Imagen'; Tipo = 'TIFF' } }

    # RIFF: WEBP/AVI/WAV
    if ($Bytes.Count -ge 12) {
        $riff = Get-AsciiSegment -Bytes $Bytes -Start 0 -Length 4
        $form = Get-AsciiSegment -Bytes $Bytes -Start 8 -Length 4

        if ($riff -eq 'RIFF') {
            if ($form -eq 'WEBP') { return [pscustomobject]@{ Categoria = 'Imagen'; Tipo = 'WEBP' } }
            if ($form -eq 'AVI ') { return [pscustomobject]@{ Categoria = 'Video'; Tipo = 'AVI' } }
            if ($form -eq 'WAVE') { return [pscustomobject]@{ Categoria = 'Audio'; Tipo = 'WAV' } }
            return [pscustomobject]@{ Categoria = 'Otro'; Tipo = 'RIFF' }
        }

        # ISO Base Media File Format: MP4/MOV/HEIC/AVIF/M4A
        if ((Get-AsciiSegment -Bytes $Bytes -Start 4 -Length 4) -eq 'ftyp') {
            $brand = (Get-AsciiSegment -Bytes $Bytes -Start 8 -Length 4).Trim().ToLowerInvariant()

            if (@('heic', 'heix', 'hevc', 'hevx', 'mif1', 'msf1') -contains $brand) {
                return [pscustomobject]@{ Categoria = 'Imagen'; Tipo = 'HEIC/HEIF' }
            }

            if (@('avif', 'avis') -contains $brand) {
                return [pscustomobject]@{ Categoria = 'Imagen'; Tipo = 'AVIF' }
            }

            if ($brand -eq 'qt') { return [pscustomobject]@{ Categoria = 'Video'; Tipo = 'MOV' } }
            if ($brand -eq 'm4a') { return [pscustomobject]@{ Categoria = 'Audio'; Tipo = 'M4A' } }

            return [pscustomobject]@{ Categoria = 'Video'; Tipo = 'MP4/M4V' }
        }
    }

    # Video
    if ($hex -like '1A45DFA3*') { return [pscustomobject]@{ Categoria = 'Video'; Tipo = 'Matroska/WebM' } }
    if ($ascii.StartsWith('FLV')) { return [pscustomobject]@{ Categoria = 'Video'; Tipo = 'FLV' } }
    if ($hex -like '3026B2758E66CF11A6D900AA0062CE57*') { return [pscustomobject]@{ Categoria = 'Video'; Tipo = 'ASF/WMV' } }
    if ($hex -like '000001BA*' -or $hex -like '000001B3*') { return [pscustomobject]@{ Categoria = 'Video'; Tipo = 'MPEG' } }

    # Audio
    if ($hex -like '4F676753*') { return [pscustomobject]@{ Categoria = 'Audio'; Tipo = 'OGG' } }
    if ($hex -like '494433*' -or $hex -like 'FFFB*' -or $hex -like 'FFF3*' -or $hex -like 'FFF2*') {
        return [pscustomobject]@{ Categoria = 'Audio'; Tipo = 'MP3' }
    }

    # Bases de datos
    if ($ascii.StartsWith('SQLite format 3')) { return [pscustomobject]@{ Categoria = 'BaseDeDatos'; Tipo = 'SQLite' } }

    # Comprimidos
    if ($hex -like '377ABCAF271C*') { return [pscustomobject]@{ Categoria = 'Comprimido'; Tipo = '7z' } }
    if ($ascii.StartsWith('Rar!')) { return [pscustomobject]@{ Categoria = 'Comprimido'; Tipo = 'RAR' } }
    if ($hex -like '1F8B*') { return [pscustomobject]@{ Categoria = 'Comprimido'; Tipo = 'GZIP' } }

    if ($Bytes.Count -ge 262 -and (Get-AsciiSegment -Bytes $Bytes -Start 257 -Length 5) -eq 'ustar') {
        return [pscustomobject]@{ Categoria = 'Comprimido'; Tipo = 'TAR' }
    }

    # ZIP / Office / ODF / paquetes
    if ($hex -like '504B0304*' -or $hex -like '504B0506*' -or $hex -like '504B0708*') {
        if (@('.docx', '.xlsx', '.pptx', '.odt', '.ods', '.odp', '.epub', '.vsdx', '.apk', '.ipa', '.jar') -contains $ext) {
            return [pscustomobject]@{ Categoria = 'Documento'; Tipo = 'ZIP basado en XML' }
        }

        return [pscustomobject]@{ Categoria = 'Comprimido'; Tipo = 'ZIP' }
    }

    # Documento / sistema / datos
    if ($hex -like '25504446*') { return [pscustomobject]@{ Categoria = 'Documento'; Tipo = 'PDF' } }
    if ($hex -like '4D5A*') { return [pscustomobject]@{ Categoria = 'Sistema'; Tipo = 'PE/EXE/DLL' } }
    if ($hex -like '7F454C46*') { return [pscustomobject]@{ Categoria = 'Sistema'; Tipo = 'ELF' } }

    # SVG puede parecer XML/texto
    if ($ext -eq '.svg' -and ($ascii.StartsWith('<?xml') -or $ascii -like '*<svg*')) {
        return [pscustomobject]@{ Categoria = 'Imagen'; Tipo = 'SVG' }
    }

    if ($ascii.StartsWith('<?xml')) { return [pscustomobject]@{ Categoria = 'Datos'; Tipo = 'XML' } }

    # BOM de texto
    if ($hex -like 'EFBBBF*') {
        if ($CategoriaExtension -in @('Texto', 'Codigo', 'Datos', 'Documento')) {
            return [pscustomobject]@{ Categoria = $CategoriaExtension; Tipo = 'Texto UTF-8 con BOM' }
        }
        return [pscustomobject]@{ Categoria = 'Texto'; Tipo = 'Texto UTF-8 con BOM' }
    }

    if ($hex -like 'FFFE*' -or $hex -like 'FEFF*') {
        if ($CategoriaExtension -in @('Texto', 'Codigo', 'Datos', 'Documento')) {
            return [pscustomobject]@{ Categoria = $CategoriaExtension; Tipo = 'Texto Unicode' }
        }
        return [pscustomobject]@{ Categoria = 'Texto'; Tipo = 'Texto Unicode' }
    }

    # Heurística texto plano
    $malos = 0
    foreach ($b in $Bytes) {
        if (($b -lt 9) -or ($b -ge 14 -and $b -le 31)) { $malos++ }
    }

    if ($Bytes.Count -gt 0 -and (($malos / $Bytes.Count) -le 0.05)) {
        if ($CategoriaExtension -in @('Texto', 'Codigo', 'Datos', 'Documento')) {
            return [pscustomobject]@{ Categoria = $CategoriaExtension; Tipo = 'Texto según extensión' }
        }

        return [pscustomobject]@{ Categoria = 'Texto'; Tipo = 'Texto plano' }
    }

    return [pscustomobject]@{ Categoria = 'Otro'; Tipo = 'Binario desconocido' }
}

function Get-ImagenDimension([string]$Path) {
    if (-not $script:drawingDisponible) { return $null }

    $fs = $null
    $img = $null

    try {
        $fs = [System.IO.File]::Open(
            $Path,
            [System.IO.FileMode]::Open,
            [System.IO.FileAccess]::Read,
            [System.IO.FileShare]::Read
        )

        $img = [System.Drawing.Image]::FromStream($fs)

        return [pscustomobject]@{
            Ancho = $img.Width
            Alto  = $img.Height
        }
    }
    catch {
        return $null
    }
    finally {
        if ($img) { $img.Dispose() }
        if ($fs) { $fs.Dispose() }
    }
}

function Get-MediaInfo([string]$Path) {
    if (-not $script:ffprobePath) { return $null }

    try {
        $output = & $script:ffprobePath `
            -v error `
            -show_entries 'format=duration,size,format_name:stream=codec_type,codec_name,width,height' `
            -of json `
            -i $Path 2>$null

        if (-not $output) { return $null }

        $json = ($output -join "`n") | ConvertFrom-Json

        $duration = $null
        if ($json.format.duration) {
            $duration = [math]::Round([double]$json.format.duration, 2)
        }

        $videoStream = $json.streams | Where-Object { $_.codec_type -eq 'video' } | Select-Object -First 1

        return [pscustomobject]@{
            Formato            = $json.format.format_name
            DuracionSegundos   = $duration
            Ancho              = $videoStream.width
            Alto               = $videoStream.height
            CodecVideo         = $videoStream.codec_name
        }
    }
    catch {
        return $null
    }
}

function Get-VistaPreviaTexto([string]$Path) {
    $fs = $null
    $sr = $null

    try {
        $fs = [System.IO.File]::Open(
            $Path,
            [System.IO.FileMode]::Open,
            [System.IO.FileAccess]::Read,
            [System.IO.FileShare]::ReadWrite
        )

        $sr = New-Object System.IO.StreamReader($fs, [System.Text.Encoding]::UTF8, $true)
        $chars = New-Object char[] 500
        $read = $sr.Read($chars, 0, 500)

        if ($read -eq 0) { return '' }

        $preview = -join $chars[0..($read - 1)]
        $preview = ($preview -replace '\s+', ' ').Trim()

        if ($preview.Length -gt 400) { $preview = $preview.Substring(0, 400) + '…' }

        return $preview
    }
    catch {
        return ''
    }
    finally {
        if ($sr) { $sr.Dispose() }
        if ($fs) { $fs.Dispose() }
    }
}

# ----------------------------------------------------------------------------
# Enumeración inicial
# ----------------------------------------------------------------------------
Write-Host "Enumerando archivos en: $rutaCompleta" -ForegroundColor Cyan

$gciFileParams = @{
    LiteralPath = $rutaCompleta
    File        = $true
    Recurse     = $true
    Force       = $true
    ErrorAction = 'SilentlyContinue'
}

$gciDirParams = @{
    LiteralPath = $rutaCompleta
    Directory   = $true
    Recurse     = $true
    Force       = $true
    ErrorAction = 'SilentlyContinue'
}

if ($MaxProfundidad -gt 0) {
    $gciFileParams.Depth = $MaxProfundidad
    $gciDirParams.Depth = $MaxProfundidad
}

$archivosBrutos = @(Get-ChildItem @gciFileParams)
$directorios = @(Get-ChildItem @gciDirParams)

if ($archivoUnico) {
    $archivosBrutos = @($archivosBrutos | Where-Object { $_.FullName -eq $archivoUnico })
}

# ----------------------------------------------------------------------------
# Estadísticas por carpeta
# ----------------------------------------------------------------------------
$folderStats = @{}
$folderStats[$rutaCompleta] = @{ Count = [long]0; Size = [long]0 }

foreach ($d in $directorios) {
    $folderStats[$d.FullName] = @{ Count = [long]0; Size = [long]0 }
}

# ----------------------------------------------------------------------------
# Procesar archivos
# ----------------------------------------------------------------------------
$archivos = New-Object System.Collections.Generic.List[object]
$i = 0
$total = $archivosBrutos.Count

foreach ($f in $archivosBrutos) {
    $i++

    if ($total -gt 0 -and ($i % 25 -eq 0 -or $i -eq $total)) {
        Write-Progress `
            -Activity 'Analizando archivos' `
            -Status $f.Name `
            -PercentComplete (($i / [Math]::Max(1, $total)) * 100)
    }

    $extension = $f.Extension
    $categoriaExtension = Get-CategoriaExtension $extension

    if (-not $NoDetectarMagic) {
        $bytes = Get-BytesInicio -Path $f.FullName -Count 512
        $real = Get-TipoReal -Bytes $bytes -Extension $extension -CategoriaExtension $categoriaExtension
    }
    else {
        $tipoTexto = if ([string]::IsNullOrWhiteSpace($extension)) { 'Sin extensión' } else { $extension.TrimStart('.').ToUpperInvariant() }
        $real = [pscustomobject]@{ Categoria = $categoriaExtension; Tipo = $tipoTexto }
    }

    $coincide = $true
    if ($real.Categoria -ne 'Otro' -and $categoriaExtension -ne 'Otro') {
        $coincide = ($categoriaExtension -eq $real.Categoria)

        if (-not $coincide) {
            if ($real.Categoria -eq 'Texto' -and $categoriaExtension -in @('Texto', 'Codigo', 'Datos', 'Documento')) {
                $coincide = $true
            }

            if ($real.Tipo -like '*ZIP*' -and $categoriaExtension -in @('Documento', 'Comprimido', 'Modelo3D', 'Sistema', 'Codigo')) {
                $coincide = $true
            }
        }
    }

    $hash = $null
    if ($IncluirHash) {
        try {
            $hash = (Get-FileHash -LiteralPath $f.FullName -Algorithm SHA256 -ErrorAction Stop).Hash
        }
        catch {
            $hash = 'ERROR'
        }
    }

    $ancho = $null
    $alto = $null
    $duracion = $null
    $codec = $null
    $formatoMultimedia = $null

    if ($AnalizarImagenes -and ($real.Categoria -eq 'Imagen' -or $categoriaExtension -eq 'Imagen') -and $f.Length -lt 100MB) {
        $dim = Get-ImagenDimension -Path $f.FullName
        if ($dim) {
            $ancho = $dim.Ancho
            $alto = $dim.Alto
        }
    }

    if ($AnalizarMultimedia -and ($real.Categoria -in @('Video', 'Audio') -or $categoriaExtension -in @('Video', 'Audio'))) {
        $media = Get-MediaInfo -Path $f.FullName
        if ($media) {
            $duracion = $media.DuracionSegundos
            if ($media.Ancho) { $ancho = $media.Ancho }
            if ($media.Alto) { $alto = $media.Alto }
            $codec = $media.CodecVideo
            $formatoMultimedia = $media.Formato
        }
    }

    $preview = ''
    if ($ExtraerTexto -and $real.Categoria -in @('Texto', 'Codigo', 'Datos') -and $f.Length -lt 2MB) {
        $preview = Get-VistaPreviaTexto -Path $f.FullName
    }

    $rutaRelativa = Get-RutaRelativa -FullPath $f.FullName -Root $rutaCompleta

    $obj = [pscustomobject]@{
        RutaCompleta          = $f.FullName
        RutaRelativa          = $rutaRelativa
        Nombre                = $f.Name
        Carpeta               = $f.DirectoryName
        Extension             = $extension
        CategoriaExtension    = $categoriaExtension
        CategoriaDetectada    = $real.Categoria
        TipoDetectado         = $real.Tipo
        ExtensionCoincidente  = $coincide
        TamanoBytes           = [long]$f.Length
        Tamano                = Format-Tamano $f.Length
        Creacion              = $f.CreationTime
        UltimoAcceso          = $f.LastAccessTime
        UltimaEscritura       = $f.LastWriteTime
        Atributos             = "$($f.Attributes)"
        HashSHA256            = $hash
        Ancho                 = $ancho
        Alto                  = $alto
        DuracionSegundos      = $duracion
        Duracion              = Format-Duracion $duracion
        Codec                 = $codec
        FormatoMultimedia     = $formatoMultimedia
        VistaPreviaTexto      = $preview
    }

    $archivos.Add($obj)

    # Acumular tamaño y archivos por carpeta + ancestros
    $dir = $f.DirectoryName
    while (-not [string]::IsNullOrEmpty($dir)) {
        if (-not $folderStats.ContainsKey($dir)) {
            $folderStats[$dir] = @{ Count = [long]0; Size = [long]0 }
        }

        $folderStats[$dir].Count++
        $folderStats[$dir].Size += $f.Length

        if ($dir -eq $rutaCompleta) { break }

        $parent = Split-Path -LiteralPath $dir -Parent
        if ([string]::IsNullOrEmpty($parent) -or $parent -eq $dir) { break }

        $dir = $parent
    }
}

Write-Progress -Activity 'Analizando archivos' -Completed

# ----------------------------------------------------------------------------
# Carpetas
# ----------------------------------------------------------------------------
$carpetas = @(
    foreach ($key in @($folderStats.Keys)) {
        $rel = Get-RutaRelativa -FullPath $key -Root $rutaCompleta
        $profundidad = 0
        if ($rel -and $rel -ne '.') {
            $profundidad = @($rel -split '[\\/]' | Where-Object { $_ }).Count
        }

        [pscustomobject]@{
            Carpeta         = $key
            RutaRelativa    = $rel
            Archivos        = [long]$folderStats[$key].Count
            TamanoBytes     = [long]$folderStats[$key].Size
            Tamano          = Format-Tamano ([long]$folderStats[$key].Size)
            Profundidad     = $profundidad
        }
    }
) | Sort-Object TamanoBytes -Descending

# ----------------------------------------------------------------------------
# CSV
# ----------------------------------------------------------------------------
$archivosCsv = Join-Path $Salida 'archivos.csv'
$carpetasCsv = Join-Path $Salida 'carpetas.csv'

$archivos | Sort-Object RutaRelativa | Export-Csv -LiteralPath $archivosCsv -NoTypeInformation -Encoding UTF8
$carpetas | Export-Csv -LiteralPath $carpetasCsv -NoTypeInformation -Encoding UTF8

# ----------------------------------------------------------------------------
# Resumen JSON
# ----------------------------------------------------------------------------
$totalTamano = ($archivos | Measure-Object -Property TamanoBytes -Sum).Sum
if ($null -eq $totalTamano) { $totalTamano = 0 }

$porCategoria = @(
    $archivos | Group-Object CategoriaDetectada | Sort-Object Count -Descending | ForEach-Object {
        $sum = ($_.Group | Measure-Object TamanoBytes -Sum).Sum
        if ($null -eq $sum) { $sum = 0 }

        [pscustomobject]@{
            Categoria   = $_.Name
            Archivos    = $_.Count
            TamanoBytes = [long]$sum
            Tamano      = Format-Tamano $sum
        }
    }
)

$porExtension = @(
    $archivos |
        Group-Object {
            if ([string]::IsNullOrEmpty($_.Extension)) { '(sin extensión)' }
            else { $_.Extension.ToLowerInvariant() }
        } |
        Sort-Object Count -Descending |
        Select-Object -First 100 |
        ForEach-Object {
            $sum = ($_.Group | Measure-Object TamanoBytes -Sum).Sum
            if ($null -eq $sum) { $sum = 0 }

            [pscustomobject]@{
                Extension   = $_.Name
                Archivos    = $_.Count
                TamanoBytes = [long]$sum
                Tamano      = Format-Tamano $sum
            }
        }
)

$topCarpetas = @($carpetas | Select-Object -First 100)
$topArchivos = @($archivos | Sort-Object TamanoBytes -Descending | Select-Object -First 100)
$recientes = @($archivos | Sort-Object UltimaEscritura -Descending | Select-Object -First 100)

$resumen = [ordered]@{
    Generado              = (Get-Date -Format 'o')
    RutaAnalizada         = $rutaCompleta
    TotalCarpetas         = $folderStats.Count
    TotalArchivos         = $archivos.Count
    TamanoTotalBytes      = [long]$totalTamano
    TamanoTotal           = Format-Tamano $totalTamano
    PorCategoria          = $porCategoria
    PorExtension          = $porExtension
    CarpetasMasPesadas    = $topCarpetas | Select-Object RutaRelativa, Archivos, TamanoBytes, Tamano
    ArchivosMasGrandes    = $topArchivos | Select-Object RutaRelativa, Nombre, TamanoBytes, Tamano, CategoriaDetectada, TipoDetectado
    Recientes             = $recientes | Select-Object RutaRelativa, Nombre, UltimaEscritura, Tamano
}

$resumenJson = Join-Path $Salida 'resumen.json'
$resumen | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $resumenJson -Encoding UTF8

# ----------------------------------------------------------------------------
# Árbol TXT
# ----------------------------------------------------------------------------
$script:dirsByParent = @{}
foreach ($d in $directorios) {
    $parent = if ($d.Parent) { $d.Parent.FullName } else { '' }
    if (-not $script:dirsByParent.ContainsKey($parent)) {
        $script:dirsByParent[$parent] = New-Object System.Collections.Generic.List[object]
    }
    $script:dirsByParent[$parent].Add($d)
}

$script:filesByParent = @{}
foreach ($f in $archivosBrutos) {
    $parent = $f.DirectoryName
    if (-not $script:filesByParent.ContainsKey($parent)) {
        $script:filesByParent[$parent] = New-Object System.Collections.Generic.List[object]
    }
    $script:filesByParent[$parent].Add($f)
}

function Write-ArbolRecursivo {
    param(
        [string]$Path,
        [string]$Indent,
        [System.IO.StreamWriter]$Writer
    )

    $nombre = Split-Path -LiteralPath $Path -Leaf
    if ([string]::IsNullOrEmpty($nombre)) { $nombre = $Path }

    $Writer.WriteLine(("{0}[DIR] {1}" -f $Indent, $nombre))

    $childDirs = @()
    if ($script:dirsByParent.ContainsKey($Path)) {
        $childDirs = @($script:dirsByParent[$Path] | Sort-Object Name)
    }

    foreach ($child in $childDirs) {
        Write-ArbolRecursivo -Path $child.FullName -Indent ($Indent + '  ') -Writer $Writer
    }

    $childFiles = @()
    if ($script:filesByParent.ContainsKey($Path)) {
        $childFiles = @($script:filesByParent[$Path] | Sort-Object Name)
    }

    foreach ($file in $childFiles) {
        $Writer.WriteLine(("{0}  {1} [{2}]" -f ($Indent + '  '), $file.Name, (Format-Tamano $file.Length)))
    }
}

$arbolTxt = Join-Path $Salida 'arbol.txt'
$sw = New-Object System.IO.StreamWriter($arbolTxt, $false, [System.Text.Encoding]::UTF8)
try {
    Write-ArbolRecursivo -Path $rutaCompleta -Indent '' -Writer $sw
}
finally {
    $sw.Dispose()
}

# ----------------------------------------------------------------------------
# HTML
# ----------------------------------------------------------------------------
function Encode-Html([object]$Text) {
    if ($null -eq $Text) { return '' }
    $s = [string]$Text
    return ($s -replace '&', '&amp;' -replace '<', '&lt;' -replace '>', '&gt;' -replace '"', '&quot;' -replace "'", '&#39;')
}

function Get-FileLink([string]$Path) {
    if ([string]::IsNullOrEmpty($Path)) { return '' }
    $normalized = $Path -replace '\\', '/'
    if ($normalized -notmatch '^file:///') {
        $normalized = 'file:///' + $normalized.TrimStart('/')
    }
    return [uri]::EscapeUriString($normalized)
}

function New-FileRow([pscustomobject]$F) {
    $link = Encode-Html (Get-FileLink $F.RutaCompleta)
    $fecha = ''
    if ($F.UltimaEscritura) { $fecha = $F.UltimaEscritura.ToString('yyyy-MM-dd HH:mm:ss') }
    $coincide = if ($F.ExtensionCoincidente) { 'Sí' } else { 'No' }

    return ('<tr><td><a href="{0}" target="_blank">{1}</a></td><td>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td><td>{6}</td><td>{7}</td></tr>' -f
        $link,
        (Encode-Html $F.Nombre),
        (Encode-Html $F.RutaRelativa),
        (Encode-Html $F.CategoriaDetectada),
        (Encode-Html $F.TipoDetectado),
        (Encode-Html $F.Tamano),
        (Encode-Html $fecha),
        (Encode-Html $coincide)
    )
}

function New-FolderRow([pscustomobject]$C) {
    $link = Encode-Html (Get-FileLink $C.Carpeta)

    return ('<tr><td><a href="{0}" target="_blank">{1}</a></td><td>{2}</td><td>{3}</td><td>{4}</td></tr>' -f
        $link,
        (Encode-Html $C.Carpeta),
        (Encode-Html $C.RutaRelativa),
        (Encode-Html $C.Archivos),
        (Encode-Html $C.Tamano)
    )
}

$html = New-Object System.Text.StringBuilder

[void]$html.AppendLine('<!doctype html>')
[void]$html.AppendLine('<html lang="es">')
[void]$html.AppendLine('<head>')
[void]$html.AppendLine('<meta charset="utf-8">')
[void]$html.AppendLine('<meta name="viewport" content="width=device-width, initial-scale=1">')
[void]$html.AppendLine('<title>Mapa extremo de archivos</title>')

[void]$html.AppendLine(@'
<style>
    body { font-family: "Segoe UI", Arial, sans-serif; margin: 20px; background: #f5f7fa; color: #111; }
    h1, h2 { margin-bottom: 8px; }
    code { background: #eef2f7; padding: 2px 6px; border-radius: 6px; }
    .cards { display: flex; flex-wrap: wrap; gap: 12px; margin: 16px 0; }
    .card { background: #fff; border: 1px solid #d8dee7; border-radius: 12px; padding: 14px 16px; min-width: 180px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    .num { font-size: 28px; font-weight: 700; }
    .lbl { color: #555; font-size: 13px; margin-top: 4px; }
    table { border-collapse: collapse; width: 100%; margin: 12px 0 30px 0; background: #fff; }
    th, td { border: 1px solid #d8dee7; padding: 7px 9px; font-size: 13px; text-align: left; vertical-align: top; }
    th { background: #eef2f7; position: sticky; top: 0; }
    tr:nth-child(even) { background: #fafbfd; }
    a { color: #0066cc; text-decoration: none; }
    a:hover { text-decoration: underline; }
    input#buscador { width: 100%; max-width: 800px; padding: 10px 12px; border: 1px solid #b8c2d0; border-radius: 10px; margin: 10px 0; font-size: 15px; }
    .nota { color: #555; font-size: 13px; }
</style>
<script>
    function filtrarTabla() {
        var filter = document.getElementById('buscador').value.toLowerCase();
        var table = document.getElementById('tablaArchivos');
        if (!table) return;
        var rows = table.getElementsByTagName('tr');

        for (var i = 1; i < rows.length; i++) {
            var text = rows[i].textContent.toLowerCase();
            rows[i].style.display = text.indexOf(filter) > -1 ? '' : 'none';
        }
    }
</script>
'@)

[void]$html.AppendLine('</head>')
[void]$html.AppendLine('<body>')
[void]$html.AppendLine('<h1>Mapa extremo de archivos</h1>')
[void]$html.AppendLine('<p><strong>Ruta analizada:</strong> <code>' + (Encode-Html $rutaCompleta) + '</code></p>')
[void]$html.AppendLine('<p><strong>Generado:</strong> ' + (Encode-Html (Get-Date -Format 'yyyy-MM-dd HH:mm:ss')) + '</p>')
[void]$html.AppendLine('<p class="nota">Los enlaces <code>file:///...</code> pueden abrirse desde el explorador, aunque algunos navegadores restringen contenido local por seguridad.</p>')

[void]$html.AppendLine('<div class="cards">')
[void]$html.AppendLine('<div class="card"><div class="num">' + $archivos.Count + '</div><div class="lbl">Archivos</div></div>')
[void]$html.AppendLine('<div class="card"><div class="num">' + $folderStats.Count + '</div><div class="lbl">Carpetas</div></div>')
[void]$html.AppendLine('<div class="card"><div class="num">' + (Encode-Html (Format-Tamano $totalTamano)) + '</div><div class="lbl">Tamaño total</div></div>')
[void]$html.AppendLine('<div class="card"><div class="num">' + $porCategoria.Count + '</div><div class="lbl">Categorías detectadas</div></div>')
[void]$html.AppendLine('</div>')

# Categorías
[void]$html.AppendLine('<h2>Categorías</h2>')
if ($porCategoria.Count -eq 0) {
    [void]$html.AppendLine('<p>No hay datos.</p>')
}
else {
    [void]$html.AppendLine('<table><thead><tr><th>Categoría</th><th>Archivos</th><th>Tamaño</th><th>Bytes</th></tr></thead><tbody>')
    foreach ($c in $porCategoria) {
        [void]$html.AppendLine(
            ('<tr><td>{0}</td><td>{1}</td><td>{2}</td><td>{3}</td></tr>' -f
                (Encode-Html $c.Categoria),
                $c.Archivos,
                (Encode-Html $c.Tamano),
                $c.TamanoBytes
            )
        )
    }
    [void]$html.AppendLine('</tbody></table>')
}

# Extensiones
[void]$html.AppendLine('<h2>Extensiones principales</h2>')
if ($porExtension.Count -eq 0) {
    [void]$html.AppendLine('<p>No hay datos.</p>')
}
else {
    [void]$html.AppendLine('<table><thead><tr><th>Extensión</th><th>Archivos</th><th>Tamaño</th><th>Bytes</th></tr></thead><tbody>')
    foreach ($e in $porExtension) {
        [void]$html.AppendLine(
            ('<tr><td>{0}</td><td>{1}</td><td>{2}</td><td>{3}</td></tr>' -f
                (Encode-Html $e.Extension),
                $e.Archivos,
                (Encode-Html $e.Tamano),
                $e.TamanoBytes
            )
        )
    }
    [void]$html.AppendLine('</tbody></table>')
}

# Carpetas pesadas
[void]$html.AppendLine('<h2>Carpetas más pesadas</h2>')
if ($topCarpetas.Count -eq 0) {
    [void]$html.AppendLine('<p>No hay datos.</p>')
}
else {
    [void]$html.AppendLine('<table><thead><tr><th>Carpeta</th><th>Ruta relativa</th><th>Archivos</th><th>Tamaño</th></tr></thead><tbody>')
    foreach ($c in $topCarpetas) {
        [void]$html.AppendLine((New-FolderRow $c))
    }
    [void]$html.AppendLine('</tbody></table>')
}

# Archivos grandes
[void]$html.AppendLine('<h2>Archivos más grandes</h2>')
if ($topArchivos.Count -eq 0) {
    [void]$html.AppendLine('<p>No hay datos.</p>')
}
else {
    [void]$html.AppendLine('<table><thead><tr><th>Nombre</th><th>Ruta relativa</th><th>Categoría</th><th>Tipo</th><th>Tamaño</th><th>Escritura</th><th>Coincide</th></tr></thead><tbody>')
    foreach ($f in $topArchivos) {
        [void]$html.AppendLine((New-FileRow $f))
    }
    [void]$html.AppendLine('</tbody></table>')
}

# Recientes
[void]$html.AppendLine('<h2>Archivos recientes</h2>')
if ($recientes.Count -eq 0) {
    [void]$html.AppendLine('<p>No hay datos.</p>')
}
else {
    [void]$html.AppendLine('<table><thead><tr><th>Nombre</th><th>Ruta relativa</th><th>Categoría</th><th>Tipo</th><th>Tamaño</th><th>Escritura</th><th>Coincide</th></tr></thead><tbody>')
    foreach ($f in $recientes) {
        [void]$html.AppendLine((New-FileRow $f))
    }
    [void]$html.AppendLine('</tbody></table>')
}

# Imágenes
$imagenes = @($archivos | Where-Object { $_.CategoriaDetectada -eq 'Imagen' -or $_.CategoriaExtension -eq 'Imagen' } | Select-Object -First 500)
[void]$html.AppendLine('<h2>Imágenes detectadas</h2>')
if ($imagenes.Count -eq 0) {
    [void]$html.AppendLine('<p>No se detectaron imágenes.</p>')
}
else {
    [void]$html.AppendLine('<table><thead><tr><th>Nombre</th><th>Ruta relativa</th><th>Tipo</th><th>Tamaño</th><th>Dimensiones</th></tr></thead><tbody>')
    foreach ($img in $imagenes) {
        $link = Encode-Html (Get-FileLink $img.RutaCompleta)
        $dim = ''
        if ($img.Ancho -and $img.Alto) { $dim = '{0}×{1}' -f $img.Ancho, $img.Alto }

        [void]$html.AppendLine(
            ('<tr><td><a href="{0}" target="_blank">{1}</a></td><td>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td></tr>' -f
                $link,
                (Encode-Html $img.Nombre),
                (Encode-Html $img.RutaRelativa),
                (Encode-Html $img.TipoDetectado),
                (Encode-Html $img.Tamano),
                (Encode-Html $dim)
            )
        )
    }
    [void]$html.AppendLine('</tbody></table>')
}

# Videos
$videos = @($archivos | Where-Object { $_.CategoriaDetectada -eq 'Video' -or $_.CategoriaExtension -eq 'Video' } | Select-Object -First 500)
[void]$html.AppendLine('<h2>Videos detectados</h2>')
if ($videos.Count -eq 0) {
    [void]$html.AppendLine('<p>No se detectaron videos.</p>')
}
else {
    [void]$html.AppendLine('<table><thead><tr><th>Nombre</th><th>Ruta relativa</th><th>Tipo</th><th>Tamaño</th><th>Duración</th><th>Codec</th><th>Resolución</th></tr></thead><tbody>')
    foreach ($vid in $videos) {
        $link = Encode-Html (Get-FileLink $vid.RutaCompleta)
        $res = ''
        if ($vid.Ancho -and $vid.Alto) { $res = '{0}×{1}' -f $vid.Ancho, $vid.Alto }

        [void]$html.AppendLine(
            ('<tr><td><a href="{0}" target="_blank">{1}</a></td><td>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td><td>{6}</td><td>{7}</td></tr>' -f
                $link,
                (Encode-Html $vid.Nombre),
                (Encode-Html $vid.RutaRelativa),
                (Encode-Html $vid.TipoDetectado),
                (Encode-Html $vid.Tamano),
                (Encode-Html (Format-Duracion $vid.DuracionSegundos)),
                (Encode-Html $vid.Codec),
                (Encode-Html $res)
            )
        )
    }
    [void]$html.AppendLine('</tbody></table>')
}

# Tabla principal buscable
[void]$html.AppendLine('<h2>Explorador de archivos</h2>')

$archivosHtml = @($archivos | Sort-Object RutaRelativa | Select-Object -First $MaxFilasHtml)

if ($archivos.Count -gt $MaxFilasHtml) {
    [void]$html.AppendLine('<p class="nota">Mostrando ' + $archivosHtml.Count + ' de ' + $archivos.Count + ' archivos en HTML. El listado completo está en <code>archivos.csv</code>.</p>')
}

if ($archivosHtml.Count -eq 0) {
    [void]$html.AppendLine('<p>No hay archivos.</p>')
}
else {
    [void]$html.AppendLine('<input type="text" id="buscador" placeholder="Buscar nombre, ruta, tipo, categoría..." onkeyup="filtrarTabla()">')
    [void]$html.AppendLine('<table id="tablaArchivos"><thead><tr><th>Nombre</th><th>Ruta relativa</th><th>Categoría</th><th>Tipo</th><th>Tamaño</th><th>Escritura</th><th>Coincide</th></tr></thead><tbody>')

    foreach ($f in $archivosHtml) {
        [void]$html.AppendLine((New-FileRow $f))
    }

    [void]$html.AppendLine('</tbody></table>')
}

[void]$html.AppendLine('</body></html>')

$htmlFile = Join-Path $Salida 'informe.html'
[System.IO.File]::WriteAllText($htmlFile, $html.ToString(), [System.Text.Encoding]::UTF8)

# ----------------------------------------------------------------------------
# README / LEEME
# ----------------------------------------------------------------------------
$leeme = @"
MAPA EXTREMO - INFORME
======================

Ruta analizada : $rutaCompleta
Generado       : $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
Salida         : $Salida

ARCHIVOS GENERADOS
------------------
informe.html   : Panel visual con resumen, categorías, imágenes, videos, archivos grandes y buscador.
archivos.csv   : Listado completo de archivos con propiedades detectadas.
carpetas.csv   : Tamaño y cantidad de archivos por carpeta.
resumen.json   : Resumen legible por programa.
arbol.txt      : Árbol de carpetas y archivos en texto.

OPCIONES USADAS
---------------
IncluirHash        : $IncluirHash
AnalizarImagenes   : $AnalizarImagenes
AnalizarMultimedia : $AnalizarMultimedia
NoDetectarMagic    : $NoDetectarMagic
ExtraerTexto       : $ExtraerTexto
MaxProfundidad     : $MaxProfundidad
MaxFilasHtml       : $MaxFilasHtml

NOTAS
-----
- La detección por magic bytes lee solo los primeros bytes de cada archivo.
- Si ffprobe.exe está en PATH, se usa para metadata multimedia.
- El contenido semántico de imágenes/videos requiere OCR/IA adicional.
"@

Set-Content -LiteralPath (Join-Path $Salida 'leeme.txt') -Value $leeme -Encoding UTF8

# ----------------------------------------------------------------------------
# Resultado final
# ----------------------------------------------------------------------------
$resultado = [pscustomobject]@{
    Ruta               = $rutaCompleta
    Salida             = $Salida
    InformeHtml        = $htmlFile
    ArchivosAnalizados = $archivos.Count
    Carpetas           = $folderStats.Count
    TamanoTotalBytes   = [long]$totalTamano
    TamanoTotal        = Format-Tamano $totalTamano
}

$resultado

Write-Host ""
Write-Host "Informe generado en:" -ForegroundColor Green
Write-Host $htmlFile -ForegroundColor Cyan
Write-Host "CSV archivos:" -ForegroundColor Green
Write-Host $archivosCsv -ForegroundColor Cyan
Write-Host "CSV carpetas:" -ForegroundColor Green
Write-Host $carpetasCsv -ForegroundColor Cyan
Write-Host "JSON resumen:" -ForegroundColor Green
Write-Host $resumenJson -ForegroundColor Cyan
Write-Host "Árbol TXT:" -ForegroundColor Green
Write-Host $arbolTxt -ForegroundColor Cyan

if ($AbrirInforme) {
    Invoke-Item $htmlFile
}
```

---

## Cómo ejecutarlo

Abre PowerShell en la carpeta donde guardaste el script.

Si solo quieres ejecutarlo sin cambiar la política global:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\Invoke-MapaExtremo.ps1 -Ruta "C:\ruta\a\escanear"
```

Ejemplo básico:

```powershell
.\Invoke-MapaExtremo.ps1 -Ruta "D:\Fotos"
```

Ejemplo más completo:

```powershell
.\Invoke-MapaExtremo.ps1 `
  -Ruta "D:\Fotos" `
  -Salida "$env:USERPROFILE\Desktop\MapaFotos" `
  -AnalizarImagenes `
  -AnalizarMultimedia `
  -ExtraerTexto `
  -AbrirInforme
```

Ejemplo extremo, con hash y todo:

```powershell
.\Invoke-MapaExtremo.ps1 `
  -Ruta "D:\" `
  -Salida "$env:USERPROFILE\Desktop\MapaD" `
  -IncluirHash `
  -AnalizarImagenes `
  -AnalizarMultimedia `
  -ExtraerTexto `
  -AbrirInforme
```

Si quieres limitar profundidad:

```powershell
.\Invoke-MapaExtremo.ps1 -Ruta "C:\Users\TUPC" -MaxProfundidad 3
```

---

## Qué genera

Dentro de la carpeta de salida tendrás:

| Archivo | Contenido |
|---|---|
| `informe.html` | Panel visual intuitivo con resumen, categorías, imágenes, videos, archivos grandes, recientes y buscador |
| `archivos.csv` | Listado completo de archivos con categoría, tipo detectado, tamaño, fechas, hash opcional, dimensiones, duración, vista previa de texto opcional |
| `carpetas.csv` | Tamaño acumulado por carpeta, cantidad de archivos y ruta relativa |
| `resumen.json` | Resumen estructurado para usar con otros programas |
| `arbol.txt` | Árbol de carpetas/archivos en texto |
| `leeme.txt` | Resumen de ejecución y archivos generados |

---

## Qué detecta

El script clasifica por extensión y también por cabecera real del archivo.

Detecta, entre otros:

- Imágenes: JPEG, PNG, GIF, BMP, TIFF, WEBP, HEIC/HEIF, AVIF, SVG.
- Videos: MP4, M4V, MOV, AVI, MKV, WebM, WMV/ASF, FLV, MPEG.
- Audio: MP3, WAV, OGG, M4A, FLAC por extensión, etc.
- Documentos: PDF, DOC/DOCX, XLS/XLSX, PPT/PPTX, ODT/ODS/ODP, EPUB.
- Texto: TXT, LOG, MD, CSV, etc.
- Datos: JSON, XML, YAML, INI, TOML.
- Código: PS1, PY, JS, TS, HTML, CSS, CS, CPP, JAVA, etc.
- Comprimidos: ZIP, RAR, 7Z, TAR, GZIP.
- Sistema: EXE, DLL, PE, ELF.
- Bases de datos: SQLite, MDB/ACCDB por extensión.
- Modelos 3D: OBJ, FBX, STL, GLTF, GLB, etc.

Además marca si la extensión **coincide o no** con el tipo real detectado.  
Ejemplo útil: un archivo llamado `foto.txt` que en realidad es JPEG aparecerá como no coincidente.

---

## Para videos/imágenes más completo

Si usas `-AnalizarMultimedia`, el script busca `ffprobe.exe`.

`ffprobe` viene con FFmpeg. Si está en PATH, el script puede extraer:

- duración
- formato
- codec de video
- resolución

Sin `ffprobe`, igualmente clasifica videos por extensión/cabecera, pero sin metadata avanzada.

---

## Sobre “saber qué son” las imágenes o videos

Este programa puede decir:

- esto es una imagen JPEG
- esta imagen mide 1920×1080
- esto es un video MP4
- este video dura 10 minutos y usa H.264
- la extensión coincide o no con el contenido real

Pero **no puede saber automáticamente**:

- si la imagen es un meme
- si es una captura de pantalla
- si el video es un tutorial
- si aparece una persona, un coche, una factura, etc.

Para eso necesitas añadir:

- OCR para texto en imágenes
- modelos de visión artificial locales o en la nube
- clasificación por IA
- análisis de miniaturas con modelos tipo CLIP/LLAVA/YOLO/OCR

---

## Rendimiento y advertencias

- Si escaneas `C:\` completo, puede tardar bastante.
- `-IncluirHash` puede tardar mucho porque lee cada archivo completo para calcular SHA256.
- `-AnalizarImagenes` puede tardar más si hay miles de imágenes.
- `-AnalizarMultimedia` puede tardar si hay muchos videos.
- Si escaneas carpetas protegidas del sistema, puede que algunos archivos den error de acceso; el script continúa.
- En unidades de red o discos lentos, la detección por cabecera puede aumentar el tiempo.

---

## Fuentes relevantes para confirmar

Puedes verificar los comandos base usados en la documentación oficial de Microsoft PowerShell:

- `Get-ChildItem`  
  https://learn.microsoft.com/powershell/module/microsoft.powershell.management/get-childitem

- `Get-FileHash`  
  https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/get-filehash

- `Export-Csv`  
  https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/export-csv

- `ConvertTo-Json`  
  https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/convertto-json

- `Set-Content`  
  https://learn.microsoft.com/powershell/module/microsoft.powershell.management/set-content

- Execution policies de PowerShell  
  https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_execution_policies

- Documentación general de PowerShell  
  https://learn.microsoft.com/powershell/scripting/

Para metadata multimedia con `ffprobe`:

- FFmpeg / ffprobe  
  https://ffmpeg.org/ffprobe.html

La detección por cabecera se basa en firmas de formato público como JPEG, PNG, GIF, ZIP, PDF, MP4/ISO BMFF, Matroska, RIFF/AVI/WAV, etc.
