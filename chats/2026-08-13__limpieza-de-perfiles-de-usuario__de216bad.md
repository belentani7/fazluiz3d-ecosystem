# Limpieza de Perfiles de Usuario

- Chat ID: `de216bad-f4d4-4837-95f1-e876177a0fc4`
- Mensajes: 2
- Periodo: 2026-08-13 18:42 UTC → 2026-08-13 18:42 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-13 18:42

# Exclusiones principales en la raíz del usuario
 $excluir = @("Desktop", "Downloads", "Pictures", "Videos", "ntuser.dat", "ntuser.ini", "ntuser.dat.LOG")

# 1. BORRAR TODO en la raíz del usuario excepto las carpetas protegidas
Get-ChildItem -Path $env:USERPROFILE -Force -Exclude $excluir | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# 2. BORRAR DENTRO DE VIDEOS todo excepto la carpeta "DRIVE"
 $rutaVideos = Join-Path -Path $env:USERPROFILE -ChildPath "Videos"
if (Test-Path $rutaVideos) {
    Get-ChildItem -Path $rutaVideos -Force -Exclude "DRIVE" | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
}

## [ASSISTANT] 2026-08-13 18:42 · Qwen3.8-Max

Tu script hace exactamente lo que describe, pero es **muy agresivo** y tiene varios puntos que conviene corregir antes de usarlo en un entorno real:

- `-Exclude` puede ser menos predecible que filtrar explícitamente con `Where-Object`.
- Faltan archivos de registro del hive del usuario: normalmente también existen `ntuser.dat.LOG1` y `ntuser.dat.LOG2`.
- Estás borrando todo lo demás de la raíz del perfil, incluyendo por ejemplo `AppData`, `Documents`, `Music`, `OneDrive`, etc., si existen.
- `-ErrorAction SilentlyContinue` oculta errores; en un borrado destructivo suele ser mejor ver o registrar fallos.
- Si `Videos` está redirigido a OneDrive o a otra ruta, `$env:USERPROFILE\Videos` puede no ser la ruta real.
- Hay que tener cuidado con junctions/symlinks y rutas largas.

---

## Versión más segura y robusta

Esta versión:

- Usa `-LiteralPath` para evitar problemas con rutas que tengan caracteres especiales.
- Filtra con `HashSet` para exclusiones rápidas y sin depender tanto del comportamiento de `-Exclude`.
- Excluye también `ntuser.dat.LOG1` y `ntuser.dat.LOG2`.
- Permite simular antes de borrar.
- Omite puntos de reanálisis/junctions para evitar borrados inesperados.
- Usa la carpeta real conocida de Videos mediante `[System.Environment]::GetFolderPath('MyVideos')`.

```powershell
# ============================================================
# Limpieza selectiva de perfil de usuario
# ============================================================

# Cambia a $false cuando hayas verificado qué se va a borrar
$simular = $true

# Exclusiones en la raíz del perfil
$excluirRaiz = @(
    'Desktop',
    'Downloads',
    'Pictures',
    'Videos',
    'ntuser.dat',
    'ntuser.ini',
    'ntuser.dat.LOG',
    'ntuser.dat.LOG1',
    'ntuser.dat.LOG2',

    # Descomenta si también quieres conservar estas carpetas:
    # 'AppData',
    # 'Documents',
    # 'Music',
    # 'OneDrive',
    # 'Favorites',
    # 'Links',
    # 'Saved Games',
    # 'Searches'
)

# Exclusiones dentro de Videos
$excluirVideos = @(
    'DRIVE'
)

function Invoke-CleanupFolder {
    param(
        [Parameter(Mandatory)]
        [string] $Folder,

        [string[]] $Exclude = @(),

        [bool] $Simulate = $true
    )

    if (-not (Test-Path -LiteralPath $Folder -PathType Container)) {
        Write-Warning "No existe o no es una carpeta: $Folder"
        return
    }

    # Conjunto de exclusiones sin distinguir mayúsculas/minúsculas
    $exclusionSet = [System.Collections.Generic.HashSet[string]]::new(
        [System.StringComparer]::OrdinalIgnoreCase
    )

    foreach ($name in $Exclude) {
        if (-not [string]::IsNullOrWhiteSpace($name)) {
            [void]$exclusionSet.Add($name.Trim())
        }
    }

    Get-ChildItem -LiteralPath $Folder -Force -ErrorAction SilentlyContinue |
        Where-Object { -not $exclusionSet.Contains($_.Name) } |
        ForEach-Object {

            # Evitar borrar junctions / symlinks / reparse points
            if ($_.Attributes -band [System.IO.FileAttributes]::ReparsePoint) {
                Write-Warning "Se omite punto de reanálisis: $($_.FullName)"
                return
            }

            if ($Simulate) {
                Write-Host "[SIMULACIÓN] Se borraría: $($_.FullName)"
            } else {
                Remove-Item -LiteralPath $_.FullName -Recurse -Force -Confirm:$false -ErrorAction Continue
            }
        }
}

# ============================================================
# 1. Limpiar raíz del perfil excepto exclusiones
# ============================================================

Invoke-CleanupFolder -Folder $env:USERPROFILE -Exclude $excluirRaiz -Simulate $simular

# ============================================================
# 2. Limpiar Videos excepto DRIVE
# ============================================================

# Obtiene la ruta real conocida de Videos, incluso si está redirigida
$videosPath = [System.Environment]::GetFolderPath('MyVideos')

# Si no existe o no devuelve ruta, usar la ruta clásica
if ([string]::IsNullOrWhiteSpace($videosPath) -or -not (Test-Path -LiteralPath $videosPath -PathType Container)) {
    $videosPath = Join-Path -Path $env:USERPROFILE -ChildPath 'Videos'
}

Invoke-CleanupFolder -Folder $videosPath -Exclude $excluirVideos -Simulate $simular
```

---

## Cómo usarlo correctamente

Primero ejecuta el script con:

```powershell
$simular = $true
```

Verás algo como:

```text
[Simulación] Se borraría: C:\Users\Usuario\AppData
[Simulación] Se borraría: C:\Users\Usuario\Documents
[Simulación] Se borraría: C:\Users\Usuario\Videos\CarpetaX
```

Revisa la lista. Si estás seguro, cambia:

```powershell
$simular = $false
```

---

## Corrección mínima de tu script original

Si quieres mantener tu estructura original, una versión corregida sería esta:

```powershell
# Exclusiones principales en la raíz del usuario
$excluir = @(
    "Desktop",
    "Downloads",
    "Pictures",
    "Videos",
    "ntuser.dat",
    "ntuser.ini",
    "ntuser.dat.LOG",
    "ntuser.dat.LOG1",
    "ntuser.dat.LOG2"
)

# 1. Borrar todo en la raíz del usuario excepto las exclusiones
Get-ChildItem -LiteralPath $env:USERPROFILE -Force |
    Where-Object { $excluir -notcontains $_.Name } |
    Remove-Item -Recurse -Force -Confirm:$false -ErrorAction Continue

# 2. Borrar dentro de Videos todo excepto DRIVE
$rutaVideos = Join-Path -Path $env:USERPROFILE -ChildPath "Videos"

if (Test-Path -LiteralPath $rutaVideos -PathType Container) {
    Get-ChildItem -LiteralPath $rutaVideos -Force |
        Where-Object { $_.Name -ne "DRIVE" } |
        Remove-Item -Recurse -Force -Confirm:$false -ErrorAction Continue
}
```

Importante: esta versión mínima sigue borrando `AppData`, `Documents`, `Music`, `OneDrive`, etc., si existen y no están excluidos.

---

## Versión todavía más segura usando `-WhatIf`

Antes de borrar de verdad, puedes usar `-WhatIf`:

```powershell
$excluir = @(
    "Desktop",
    "Downloads",
    "Pictures",
    "Videos",
    "ntuser.dat",
    "ntuser.ini",
    "ntuser.dat.LOG",
    "ntuser.dat.LOG1",
    "ntuser.dat.LOG2"
)

Get-ChildItem -LiteralPath $env:USERPROFILE -Force |
    Where-Object { $excluir -notcontains $_.Name } |
    Remove-Item -Recurse -Force -WhatIf
```

Y para Videos:

```powershell
$rutaVideos = Join-Path -Path $env:USERPROFILE -ChildPath "Videos"

if (Test-Path -LiteralPath $rutaVideos -PathType Container) {
    Get-ChildItem -LiteralPath $rutaVideos -Force |
        Where-Object { $_.Name -ne "DRIVE" } |
        Remove-Item -Recurse -Force -WhatIf
}
```

Si la salida de `-WhatIf` muestra exactamente lo que esperas, entonces quitas `-WhatIf` y ejecutas el borrado real.

---

## Punto crítico: `AppData`

Tu exclusión actual no incluye `AppData`.

Esto significa que este comando:

```powershell
Get-ChildItem -Path $env:USERPROFILE -Force -Exclude $excluir | Remove-Item -Recurse -Force
```

borrará:

```text
C:\Users\Usuario\AppData
```

Eso puede dejar aplicaciones sin configuración, perfiles corruptos, navegadores sin datos, accesos rotos, cachés eliminadas, configuraciones de usuario perdidas, etc.

Si tu intención es conservar el perfil funcional, agrega:

```powershell
'AppData'
```

a la lista de exclusiones.

Si realmente quieres borrar `AppData`, hazlo solo bajo una estrategia clara de limpieza o despliegue, preferiblemente con el usuario cerrado o desde una cuenta administrativa.

---

## Punto crítico: `Documents`, `Music`, `OneDrive`

Tu lista protege:

```powershell
Desktop
Downloads
Pictures
Videos
```

Pero no protege:

```text
Documents
Music
OneDrive
Favorites
Links
Saved Games
Searches
```

Especial cuidado con `OneDrive`.

Si existe:

```text
C:\Users\Usuario\OneDrive
```

y OneDrive está sincronizando, borrar ese contenido localmente puede provocar que los archivos también se eliminen en la nube, según el estado de sincronización y configuración.

Si quieres conservar esas carpetas, usa algo como:

```powershell
$excluir = @(
    "Desktop",
    "Downloads",
    "Pictures",
    "Videos",
    "Documents",
    "Music",
    "OneDrive",
    "ntuser.dat",
    "ntuser.ini",
    "ntuser.dat.LOG",
    "ntuser.dat.LOG1",
    "ntuser.dat.LOG2"
)
```

---

## Punto crítico: `ntuser.dat.LOG`

En versiones modernas de Windows, además de:

```text
ntuser.dat
ntuser.ini
ntuser.dat.LOG
```

pueden existir:

```text
ntuser.dat.LOG1
ntuser.dat.LOG2
```

Por eso conviene incluirlos.

Una lista más completa sería:

```powershell
$excluir = @(
    "Desktop",
    "Downloads",
    "Pictures",
    "Videos",
    "ntuser.dat",
    "ntuser.ini",
    "ntuser.dat.LOG",
    "ntuser.dat.LOG1",
    "ntuser.dat.LOG2"
)
```

---

## Punto crítico: `Videos` puede estar redirigido

En muchos equipos, especialmente con OneDrive Known Folder Move, la carpeta real de Videos puede no estar en:

```text
C:\Users\Usuario\Videos
```

Puede estar en algo como:

```text
C:\Users\Usuario\OneDrive\Videos
```

Por eso es mejor usar:

```powershell
[System.Environment]::GetFolderPath('MyVideos')
```

Ejemplo:

```powershell
$rutaVideos = [System.Environment]::GetFolderPath('MyVideos')

if (-not (Test-Path -LiteralPath $rutaVideos -PathType Container)) {
    $rutaVideos = Join-Path -Path $env:USERPROFILE -ChildPath "Videos"
}
```

Esto obtiene la ruta real registrada para la carpeta Videos.

---

## Punto crítico: `-Exclude` vs `Where-Object`

Tu script usa:

```powershell
Get-ChildItem -Path $env:USERPROFILE -Force -Exclude $excluir
```

Esto puede funcionar, pero para operaciones destructivas es más seguro filtrar explícitamente:

```powershell
Get-ChildItem -LiteralPath $env:USERPROFILE -Force |
    Where-Object { $excluir -notcontains $_.Name }
```

Ventajas:

- Controlas exactamente qué propiedad se compara.
- Es más fácil de depurar.
- Evitas comportamientos inesperados del proveedor.
- Puedes agregar condiciones adicionales, como omitir junctions, archivos de sistema, etc.

Ejemplo:

```powershell
Get-ChildItem -LiteralPath $env:USERPROFILE -Force |
    Where-Object { $excluir -notcontains $_.Name } |
    Select-Object FullName, Attributes, Length
```

Esto te permite revisar antes de borrar.

---

## Versión con registro/log

Si quieres guardar evidencia de lo borrado, puedes usar:

```powershell
$simular = $false
$log = Join-Path $env:TEMP "cleanup_user_$(Get-Date -Format 'yyyyMMdd_HHmmss').log"

"* Inicio: $(Get-Date)" | Out-File -FilePath $log -Encoding UTF8

$excluirRaiz = @(
    'Desktop',
    'Downloads',
    'Pictures',
    'Videos',
    'ntuser.dat',
    'ntuser.ini',
    'ntuser.dat.LOG',
    'ntuser.dat.LOG1',
    'ntuser.dat.LOG2'
)

Get-ChildItem -LiteralPath $env:USERPROFILE -Force |
    Where-Object { $excluirRaiz -notcontains $_.Name } |
    ForEach-Object {
        "Borrando: $($_.FullName)" | Out-File -FilePath $log -Append -Encoding UTF8
        if (-not $simular) {
            Remove-Item -LiteralPath $_.FullName -Recurse -Force -Confirm:$false -ErrorAction Continue
        }
    }

$videosPath = [System.Environment]::GetFolderPath('MyVideos')

if ([string]::IsNullOrWhiteSpace($videosPath) -or -not (Test-Path -LiteralPath $videosPath -PathType Container)) {
    $videosPath = Join-Path -Path $env:USERPROFILE -ChildPath 'Videos'
}

if (Test-Path -LiteralPath $videosPath -PathType Container) {
    Get-ChildItem -LiteralPath $videosPath -Force |
        Where-Object { $_.Name -ne 'DRIVE' } |
        ForEach-Object {
            "Borrando en Videos: $($_.FullName)" | Out-File -FilePath $log -Append -Encoding UTF8
            if (-not $simular) {
                Remove-Item -LiteralPath $_.FullName -Recurse -Force -Confirm:$false -ErrorAction Continue
            }
        }
}

"* Fin: $(Get-Date)" | Out-File -FilePath $log -Append -Encoding UTF8

Write-Host "Registro guardado en: $log"
```

---

## Si el objetivo real es eliminar el perfil completo

Si lo que quieres no es limpiar parcialmente el perfil, sino eliminar correctamente el perfil de usuario, no es recomendable borrar manualmente la carpeta del usuario.

La forma más correcta en Windows es usar `Win32_UserProfile`.

Ejemplo para eliminar el perfil asociado a una ruta concreta:

```powershell
$perfilObjetivo = $env:USERPROFILE

Get-CimInstance -ClassName Win32_UserProfile |
    Where-Object { $_.LocalPath -eq $perfilObjetivo } |
    Remove-CimInstance
```

Esto debería ejecutarse:

- Con permisos administrativos.
- Sin tener el perfil cargado.
- Preferiblemente desde otra cuenta administrativa.
- Idealmente sin la sesión del usuario activa.

Si el perfil está cargado, puede fallar.

---

## Recomendación final

Si tu objetivo es “dejar limpio el usuario pero conservar carpetas básicas”, yo usaría esta lista mínima:

```powershell
$excluir = @(
    "Desktop",
    "Downloads",
    "Pictures",
    "Videos",
    "Documents",
    "Music",
    "AppData",
    "OneDrive",
    "ntuser.dat",
    "ntuser.ini",
    "ntuser.dat.LOG",
    "ntuser.dat.LOG1",
    "ntuser.dat.LOG2"
)
```

Y si realmente quieres borrar también `AppData`, `Documents`, `Music` y `OneDrive`, entonces tu script original es conceptualmente válido, pero deberías ejecutarlo primero con `-WhatIf` o con simulación.

---

## Fuentes oficiales relevantes

Documentación Microsoft aplicable:

- `Get-ChildItem`, parámetros `-Exclude`, `-Force`, `-LiteralPath`:  
  https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem

- `Remove-Item`, parámetros `-Recurse`, `-Force`, `-WhatIf`:  
  https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item

- `Environment.SpecialFolder`, para obtener rutas conocidas como Videos:  
  https://learn.microsoft.com/en-us/dotnet/api/system.environment.specialfolder

- `Win32_UserProfile`, para eliminación correcta de perfiles de usuario:  
  https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/win32-userprofile

- Redirección de carpetas conocidas / OneDrive Known Folder Move:  
  https://learn.microsoft.com/en-us/sharepoint/redirect-known-folders
