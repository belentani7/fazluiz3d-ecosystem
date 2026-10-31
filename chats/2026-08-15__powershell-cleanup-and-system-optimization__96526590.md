# PowerShell Cleanup and System Optimization

- Chat ID: `96526590-d279-4ed9-9a51-2e923a5073b8`
- Mensajes: 2
- Periodo: 2026-08-15 02:41 UTC → 2026-08-15 02:41 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-15 02:41

comando mas completo de powershell limpiado de ram temporales appdata recuperacion windows bajar efectos visuales rapidez saluud limpiar y actualizar cuarentenas rodo

## [ASSISTANT] 2026-08-15 02:41 · Qwen3.8-Max

No existe **un solo comando seguro** que haga todo eso sin riesgo. Lo más completo y seguro es un **script de PowerShell** que combine limpieza, salud, efectos visuales, Defender y Windows Update, **sin borrar AppData completo**, **sin tocar la partición de recuperación** y **sin “vaciar RAM” de forma agresiva**, porque Windows gestiona la RAM y forzarla puede empeorar el rendimiento.

Te dejo un script amplio para **Windows 10/11**, pensado para ejecutarse como administrador.

---

## 1) Cómo usarlo

### Opción rápida: pegar en PowerShell elevado

1. Pulsa **Win + X**.
2. Abre **Terminal/PowerShell como administrador**.
3. Pega el script completo de abajo y pulsa **Enter**.

### Opción recomendada: guardarlo como archivo

Crea un archivo, por ejemplo:

```powershell
C:\Mantenimiento.ps1
```

Pega dentro el script, guarda, y luego ejecuta:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
cd C:\
.\Mantenimiento.ps1
```

Para hacer más acciones opcionales:

```powershell
.\Mantenimiento.ps1 -RestartNow -EmptyRecycleBin -FullDefenderScan -ResetComponentStore -DeletePrefetch
```

Y una versión aún más agresiva, solo si sabes lo que haces:

```powershell
.\Mantenimiento.ps1 -RestartNow -EmptyRecycleBin -FullDefenderScan -ResetComponentStore -DeletePrefetch -DisableHibernation -UsePSWindowsUpdate
```

---

## 2) Script completo de mantenimiento

Copia esto completo:

```powershell
param(
    [switch]$RestartNow,
    [switch]$EmptyRecycleBin,
    [switch]$FullDefenderScan,
    [switch]$OfflineDefenderScan,
    [switch]$ResetComponentStore,
    [switch]$DeletePrefetch,
    [switch]$DisableHibernation,
    [switch]$UsePSWindowsUpdate
)

# Requiere administrador
$currentUser = [Security.Principal.WindowsIdentity]::GetCurrent()
$principal = New-Object Security.Principal.WindowsPrincipal($currentUser)

if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Warning 'Necesitas ejecutar PowerShell como administrador.'
    return
}

$ErrorActionPreference = 'SilentlyContinue'
$ProgressPreference = 'SilentlyContinue'

$logFile = Join-Path $env:USERPROFILE "Desktop\Mantenimiento_$(Get-Date -Format yyyyMMdd_HHmmss).log"
Start-Transcript -Path $logFile -Force | Out-Null

function Remove-FolderContents {
    param([string[]]$Paths)

    foreach ($p in $Paths) {
        if (Test-Path $p) {
            Write-Output "Limpiando: $p"
            Remove-Item -Path "$p\*" -Recurse -Force -ErrorAction SilentlyContinue
        } else {
            Write-Output "No existe/omitido: $p"
        }
    }
}

function Set-RegDword {
    param(
        [string]$Path,
        [string]$Name,
        [int]$Value
    )

    if (-not (Test-Path $Path)) {
        New-Item -Path $Path -Force | Out-Null
    }

    New-ItemProperty -Path $Path -Name $Name -Value $Value -PropertyType DWord -Force | Out-Null
}

Write-Output '=== Crear punto de restauración ==='
Checkpoint-Computer -Description "Mantenimiento_$(Get-Date -Format yyyyMMdd_HHmm)" -RestorePointType MODIFY_SETTINGS

Write-Output '=== Verificación/reparación de salud: SFC y DISM ==='
sfc /scannow
DISM /Online /Cleanup-Image /ScanHealth
DISM /Online /Cleanup-Image /CheckHealth
DISM /Online /Cleanup-Image /RestoreHealth

Write-Output '=== Escaneo rápido de volumen ==='
$sysDrive = [char]$env:SystemDrive.Substring(0,1)
Repair-Volume -DriveLetter $sysDrive -Scan

Write-Output '=== Detener servicios de actualización para limpiar cachés ==='
Stop-Service -Name wuauserv, bits, cryptSvc, msiserver, dosvc -Force -ErrorAction SilentlyContinue

Remove-FolderContents -Paths @(
    $env:TEMP,
    "$env:LOCALAPPDATA\Temp",
    "$env:LOCALAPPDATA\CrashDumps",
    'C:\Windows\Temp',
    'C:\Windows\SoftwareDistribution\Download',
    'C:\Windows\Minidump',
    'C:\Windows\LiveKernelReports',
    'C:\ProgramData\Microsoft\Windows\WER\ReportQueue',
    'C:\ProgramData\Microsoft\Windows\WER\ReportArchive',
    'C:\ProgramData\Microsoft\Windows\WER\Temp'
)

if ($DeletePrefetch) {
    Write-Warning 'Borrar Prefetch puede hacer que algunas aplicaciones tarden más en abrirse la próxima vez.'
    Remove-FolderContents -Paths @('C:\Windows\Prefetch')
}

Write-Output '=== Reiniciar servicios de actualización ==='
Start-Service -Name wuauserv, bits, cryptSvc, msiserver, dosvc -ErrorAction SilentlyContinue

Write-Output '=== Limpiar caché de Delivery Optimization ==='
if (Get-Command Delete-DeliveryOptimizationCache -ErrorAction SilentlyContinue) {
    Delete-DeliveryOptimizationCache -Force -ErrorAction SilentlyContinue
}

Write-Output '=== Limpiador de Windows (cleanmgr). Si aparece una ventana, acepta/continúa. ==='
Start-Process -FilePath cleanmgr.exe -ArgumentList '/verylowdisk' -Wait -ErrorAction SilentlyContinue

Write-Output '=== Limpieza de almacén de componentes ==='
Dism /Online /Cleanup-Image /StartComponentCleanup

if ($ResetComponentStore) {
    Write-Warning 'ResetBase elimina la posibilidad de desinstalar actualizaciones ya instaladas. Úsalo solo si el sistema está estable.'
    Dism /Online /Cleanup-Image /StartComponentCleanup /ResetBase
}

Write-Output '=== Optimizar unidad ==='
try {
    $diskNumber = (Get-Partition -DriveLetter $sysDrive).DiskNumber
    $mediaType = (Get-PhysicalDisk -DeviceNumber $diskNumber).MediaType

    if ($mediaType -eq 'SSD') {
        Optimize-Volume -DriveLetter $sysDrive -ReTrim -Verbose
    } else {
        Optimize-Volume -DriveLetter $sysDrive -Defrag -Verbose
    }
} catch {
    Write-Warning 'No se pudo optimizar la unidad automáticamente.'
}

if ($EmptyRecycleBin) {
    Write-Output '=== Vaciar papelera de reciclaje ==='
    Clear-RecycleBin -Force -ErrorAction SilentlyContinue
}

Write-Output '=== Reducir efectos visuales y mejorar respuesta ==='
Set-RegDword -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\VisualEffects' -Name 'VisualFXSetting' -Value 2
Set-RegDword -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize' -Name 'EnableTransparency' -Value 0
Set-RegDword -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced' -Name 'TaskbarAnimations' -Value 0
Set-RegDword -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Serialize' -Name 'StartupDelayInMSec' -Value 0

New-ItemProperty -Path 'HKCU:\Control Panel\Desktop' -Name 'MenuShowDelay' -Value '0' -PropertyType String -Force | Out-Null

Write-Output '=== Plan de energía: Alto rendimiento ==='
powercfg.exe /setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c

if ($DisableHibernation) {
    Write-Warning 'Se desactivará la hibernación y el inicio rápido; esto libera hiberfil.sys pero puede hacer que el encendido sea más lento.'
    powercfg.exe /h off
}

Write-Output '=== Procesos que más RAM usan ahora (informativo) ==='
Get-Process | Sort-Object WorkingSet64 -Descending |
    Select-Object -First 15 Name, Id, @{n='RAM_MB';e={[math]::Round($_.WorkingSet64 / 1MB,1)}} |
    Format-Table -AutoSize

Write-Output '=== Limpiar caché DNS ==='
Clear-DnsClientCache

Write-Output '=== Microsoft Defender: actualizar firmas, escanear y revisar amenazas/cuarentena ==='
Update-MpSignature

Set-MpPreference -HighThreatDefaultAction Remove -SevereThreatDefaultAction Remove -ModerateThreatDefaultAction Quarantine -LowThreatDefaultAction Quarantine -ErrorAction SilentlyContinue
Set-MpPreference -PUAProtection Enabled -ErrorAction SilentlyContinue

if ($FullDefenderScan) {
    Write-Output 'Iniciando análisis completo de Defender...'
    Start-MpScan -ScanType FullScan
} else {
    Write-Output 'Iniciando análisis rápido de Defender...'
    Start-MpScan -ScanType QuickScan
}

Get-MpComputerStatus | Select-Object AntivirusEnabled, RealTimeProtectionEnabled, AntivirusSignatureLastUpdated, QuickScanEndTime, FullScanEndTime | Format-List
Get-MpThreatDetection | Select-Object ThreatID, DomainUser, ProcessName, InitialDetectionTime, Resources | Format-List

if (Get-Command Remove-MpThreat -ErrorAction SilentlyContinue) {
    $threats = Get-MpThreat

    if ($threats) {
        foreach ($t in $threats) {
            Write-Output "Intentando quitar amenaza: $($t.ThreatID)"
            Remove-MpThreat -ThreatID $t.ThreatID -ErrorAction SilentlyContinue
        }
    } else {
        Write-Output 'No se listaron amenazas activas/cuarentena visibles con Get-MpThreat.'
    }
} else {
    Write-Warning 'Remove-MpThreat no está disponible en este sistema. Revisa Seguridad de Windows > Protección contra virus y amenazas > Historial de protección.'
}

Write-Output '=== Windows Update ==='
if ($UsePSWindowsUpdate) {
    Write-Output 'Usando módulo PSWindowsUpdate (si no está instalado, se instalará desde PSGallery).'

    try {
        if (-not (Get-Module -ListAvailable -Name PSWindowsUpdate)) {
            Install-Module -Name PSWindowsUpdate -Force -AllowClobber -Scope CurrentUser
        }

        Import-Module PSWindowsUpdate -Force
        Get-WindowsUpdate -AcceptAll -Install -AutoReboot:$false
    } catch {
        Write-Warning 'No se pudo usar PSWindowsUpdate. Usando UsoClient como alternativa.'

        Start-Process -FilePath "$env:SystemRoot\System32\UsoClient.exe" -ArgumentList 'StartScan' -Wait -ErrorAction SilentlyContinue
        Start-Process -FilePath "$env:SystemRoot\System32\UsoClient.exe" -ArgumentList 'StartDownload' -Wait -ErrorAction SilentlyContinue
        Start-Process -FilePath "$env:SystemRoot\System32\UsoClient.exe" -ArgumentList 'StartInteractiveInstall' -Wait -ErrorAction SilentlyContinue
    }
} else {
    Start-Process -FilePath "$env:SystemRoot\System32\UsoClient.exe" -ArgumentList 'StartScan' -Wait -ErrorAction SilentlyContinue
    Start-Process -FilePath "$env:SystemRoot\System32\UsoClient.exe" -ArgumentList 'StartDownload' -Wait -ErrorAction SilentlyContinue
    Start-Process -FilePath "$env:SystemRoot\System32\UsoClient.exe" -ArgumentList 'StartInteractiveInstall' -Wait -ErrorAction SilentlyContinue
}

Write-Output '=== Estado de Recuperación de Windows (informativo, no se borra) ==='
reagentc /info

Stop-Transcript
Write-Output "Registro guardado en: $logFile"

if ($OfflineDefenderScan) {
    Write-Warning 'El análisis offline de Defender normalmente reinicia el equipo y continúa fuera de Windows.'
    Start-MpWDOScan
    return
}

if ($RestartNow) {
    Write-Output 'Reiniciando el equipo...'
    Restart-Computer -Force
} else {
    Write-Warning 'Reinicia manualmente para aplicar efectos visuales, actualizaciones y algunos cambios.'
}
```

---

## 3) Qué hace este script

### Limpieza segura

Borra o intenta limpiar:

- Temporales del usuario:
  - `%TEMP%`
  - `%LOCALAPPDATA%\Temp`
- Temporales de Windows:
  - `C:\Windows\Temp`
- Caché de Windows Update:
  - `C:\Windows\SoftwareDistribution\Download`
- Volcados de memoria:
  - `C:\Windows\Minidump`
  - `C:\Windows\LiveKernelReports`
  - `%LOCALAPPDATA%\CrashDumps`
- Informes de errores de Windows:
  - `C:\ProgramData\Microsoft\Windows\WER\ReportQueue`
  - `C:\ProgramData\Microsoft\Windows\WER\ReportArchive`
  - `C:\ProgramData\Microsoft\Windows\WER\Temp`
- Caché de Delivery Optimization.
- Limpieza adicional con `cleanmgr`.

No borra:

- Documentos.
- Escritorio.
- Descargas.
- Perfiles completos de navegador.
- `AppData` completo.
- Partición de recuperación.
- `C:\Windows\Installer`.
- `WinSxS` manualmente.

Esto último es importante: borrar `WinSxS` o `C:\Windows\Installer` a mano puede romper Windows.

---

### Salud del sistema

Ejecuta:

```powershell
sfc /scannow
```

Repara archivos de sistema protegidos.

También ejecuta:

```powershell
DISM /Online /Cleanup-Image /ScanHealth
DISM /Online /Cleanup-Image /CheckHealth
DISM /Online /Cleanup-Image /RestoreHealth
```

Esto revisa y repara la imagen de Windows cuando es posible.

Además:

```powershell
Repair-Volume -DriveLetter C -Scan
```

Hace un escaneo del volumen. No formatea ni borra datos.

---

### Limpieza de componentes

Ejecuta:

```powershell
Dism /Online /Cleanup-Image /StartComponentCleanup
```

Limpia componentes antiguos de Windows de forma segura.

Si usas:

```powershell
-ResetComponentStore
```

Ejecuta:

```powershell
Dism /Online /Cleanup-Image /StartComponentCleanup /ResetBase
```

Esto puede liberar más espacio, pero **ya no podrás desinstalar actualizaciones anteriores**. Úsalo solo si el sistema va estable.

---

### Efectos visuales

El script reduce animaciones y transparencia.

Cambia:

- `VisualFXSetting` a modo de mejor rendimiento.
- Desactiva transparencia.
- Desactiva animaciones de barra de tareas.
- Reduce retraso de menús.
- Quita retraso de inicio de aplicaciones en algunos sistemas.

Después suele ser necesario **cerrar sesión o reiniciar** para notar todos los cambios.

---

### Plan de energía

Activa:

```powershell
powercfg.exe /setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
```

Eso activa **Alto rendimiento**.

En portátiles puede gastar más batería. Si prefieres equilibrio, puedes volver a equilibrado con:

```powershell
powercfg /setactive 381b4222-f694-41f0-9685-ff5bb260df2e
```

---

### RAM

El script **no “vacía RAM” agresivamente** porque normalmente no es recomendable.

Windows usa RAM libre para caché; eso mejora velocidad. Forzar la liberación de RAM puede hacer que el sistema vuelva a cargar cosas desde disco y vaya más lento.

El script muestra los procesos que más RAM usan:

```powershell
Get-Process | Sort-Object WorkingSet64 -Descending
```

Si necesitas liberar RAM de verdad:

1. Cierra aplicaciones pesadas.
2. Desactiva programas de inicio innecesarios.
3. Reinicia el equipo.
4. Si hay malware, haz análisis completo.

Si quieres vaciar memoria standby manualmente, puedes usar **RAMMap** de Sysinternals, pero no es un cmdlet nativo y puede causar lentitud temporal.

---

### Defender y cuarentena

El script:

```powershell
Update-MpSignature
```

Actualiza firmas de Microsoft Defender.

Luego ejecuta:

```powershell
Start-MpScan -ScanType QuickScan
```

O, si usas `-FullDefenderScan`:

```powershell
Start-MpScan -ScanType FullScan
```

También intenta listar amenazas:

```powershell
Get-MpThreatDetection
Get-MpThreat
```

Y si existe el cmdlet:

```powershell
Remove-MpThreat
```

Intenta quitar amenazas detectadas.

Si `Remove-MpThreat` no está disponible o falla, revisa manualmente:

**Seguridad de Windows > Protección contra virus y amenazas > Historial de protección**

---

### Windows Update

Por defecto usa:

```powershell
UsoClient StartScan
UsoClient StartDownload
UsoClient StartInteractiveInstall
```

Esto ordena a Windows Update buscar, descargar e iniciar instalación interactiva.

Si usas:

```powershell
-UsePSWindowsUpdate
```

Intenta usar el módulo:

```powershell
PSWindowsUpdate
```

Con:

```powershell
Get-WindowsUpdate -AcceptAll -Install -AutoReboot:$false
```

Ese módulo no es parte central de Windows, viene de PowerShell Gallery, pero es muy usado para administración de actualizaciones.

---

## 4) Parámetros disponibles

### `-RestartNow`

Reinicia al terminar.

```powershell
.\Mantenimiento.ps1 -RestartNow
```

---

### `-EmptyRecycleBin`

Vacía la papelera.

```powershell
.\Mantenimiento.ps1 -EmptyRecycleBin
```

---

### `-FullDefenderScan`

Hace análisis completo de Defender en lugar de rápido.

```powershell
.\Mantenimiento.ps1 -FullDefenderScan
```

---

### `-OfflineDefenderScan`

Ejecuta análisis offline de Defender.

```powershell
.\Mantenimiento.ps1 -OfflineDefenderScan
```

Esto puede reiniciar el equipo y ejecutar Defender antes de iniciar Windows.

---

### `-ResetComponentStore`

Ejecuta:

```powershell
Dism /Online /Cleanup-Image /StartComponentCleanup /ResetBase
```

Libera más espacio, pero impide desinstalar actualizaciones previas.

```powershell
.\Mantenimiento.ps1 -ResetComponentStore
```

---

### `-DeletePrefetch`

Borra:

```powershell
C:\Windows\Prefetch
```

No lo recomiendo como rutina. Puede hacer que algunas aplicaciones tarden más en abrirse la próxima vez.

```powershell
.\Mantenimiento.ps1 -DeletePrefetch
```

---

### `-DisableHibernation`

Desactiva hibernación:

```powershell
powercfg /h off
```

Libera `hiberfil.sys`, pero desactiva hibernación e inicio rápido.

```powershell
.\Mantenimiento.ps1 -DisableHibernation
```

---

### `-UsePSWindowsUpdate`

Usa el módulo `PSWindowsUpdate` para instalar actualizaciones.

```powershell
.\Mantenimiento.ps1 -UsePSWindowsUpdate
```

---

## 5) Ejemplos prácticos

### Mantenimiento seguro normal

```powershell
.\Mantenimiento.ps1
```

### Mantenimiento completo recomendado

```powershell
.\Mantenimiento.ps1 -RestartNow -EmptyRecycleBin -FullDefenderScan
```

### Mantenimiento agresivo para PC muy lento

```powershell
.\Mantenimiento.ps1 -RestartNow -EmptyRecycleBin -FullDefenderScan -ResetComponentStore -DeletePrefetch
```

### Mantenimiento agresivo liberando espacio por hibernación

```powershell
.\Mantenimiento.ps1 -RestartNow -EmptyRecycleBin -FullDefenderScan -ResetComponentStore -DeletePrefetch -DisableHibernation
```

### Mantenimiento con actualización vía módulo PSWindowsUpdate

```powershell
.\Mantenimiento.ps1 -RestartNow -EmptyRecycleBin -UsePSWindowsUpdate
```

---

## 6) Si quieres limpiar “Windows.old” o instalaciones anteriores

No lo borres manualmente a mano. Mejor:

1. Ejecuta:

```powershell
cleanmgr
```

2. Pulsa **Limpiar archivos del sistema**.
3. Marca:
   - Instalaciones anteriores de Windows.
   - Archivos de registro de actualización de Windows.
   - Archivos temporales.
   - Caché de sombreado de DirectX, si aparece.
   - Archivos de optimización de distribución.
4. Acepta.

Borrar `Windows.old` manualmente puede dejar sin opción de volver a la versión anterior de Windows.

---

## 7) Si quieres revisar programas de inicio

PowerShell puede listar algunos elementos de inicio:

```powershell
Get-CimInstance Win32_StartupCommand | Select-Object Name, Command, Location | Format-Table -AutoSize
```

Pero para desactivar programas de inicio de forma más completa:

1. Pulsa **Ctrl + Shift + Esc**.
2. Abre **Administrador de tareas**.
3. Ve a **Inicio**.
4. Deshabilita lo innecesario.

No deshabilites cosas de audio, chipset, seguridad o fabricantes si no sabes qué son.

---

## 8) Si quieres actualizar controladores

Después de Windows Update, puedes ejecutar:

```powershell
pnputil /scan-devices
```

También puedes revisar:

**Configuración > Windows Update > Opciones avanzadas > Actualizaciones opcionales**

No instales drivers opcionales si el equipo funciona bien, salvo que necesites un componente específico.

---

## 9) Cosas que no deberías hacer

No ejecutes comandos que prometan “limpiar RAM” borrando memoria de forma agresiva. Puede causar más lentitud.

No borres manualmente:

```text
C:\Windows\WinSxS
C:\Windows\Installer
C:\Windows\System32\DriverStore
```

No borres la partición de recuperación salvo que sepas exactamente lo que haces. Si la borras, puedes perder opciones de recuperación del fabricante o herramientas de reparación.

No borres todo `AppData`. Ahí hay configuraciones de programas, navegadores, juegos, certificados, perfiles y datos de usuario.

---

## 10) Si SFC o DISM fallan

Si `DISM /RestoreHealth` falla, puede deberse a falta de conexión a Windows Update o daño profundo.

Puedes usar una ISO de Windows como fuente. Ejemplo general:

```powershell
DISM /Online /Cleanup-Image /RestoreHealth /Source:wim:D:\sources\install.wim:1 /LimitAccess
```

Donde `D:` sería la unidad donde está montada la ISO de Windows.

Si `sfc /scannow` no puede reparar y el sistema sigue fallando, puede ser necesario:

- Restaurar sistema.
- Restablecer Windows conservando archivos.
- Reinstalar Windows.

---

## 11) Fuentes relevantes

Documentación oficial y relevante de Microsoft:

- SFC:  
  https://learn.microsoft.com/windows-server/administration/windows-commands/sfc

- DISM - referencia general:  
  https://learn.microsoft.com/windows-hardware/manufacture/desktop/dism---deployment-image-servicing-and-management-technical-reference-for-windows

- DISM - limpieza de imagen y componentes:  
  https://learn.microsoft.com/windows-hardware/manufacture/desktop/dism-operating-system-package-servicing-command-line-options

- Cleanmgr:  
  https://learn.microsoft.com/windows-server/administration/windows-commands/cleanmgr

- Powercfg:  
  https://learn.microsoft.com/windows-hardware/design/device-experiences/powercfg-command-line-options

- Microsoft Defender PowerShell:  
  https://learn.microsoft.com/powershell/module/defender/

- Delete-DeliveryOptimizationCache:  
  https://learn.microsoft.com/powershell/module/deliveryoptimization/delete-deliveryoptimizationcache

- Repair-Volume:  
  https://learn.microsoft.com/powershell/module/storage/repair-volume

- Optimize-Volume:  
  https://learn.microsoft.com/powershell/module/storage/optimize-volume

- Reagentc:  
  https://learn.microsoft.com/windows-hardware/manufacture/desktop/reagentc-command-line-options

- USOClient / Windows Update:  
  https://learn.microsoft.com/windows/deployment/update/waas-manage-updates-usoclient

- PSWindowsUpdate en PowerShell Gallery:  
  https://www.powershellgallery.com/packages/PSWindowsUpdate

---

## 12) Resumen práctico

El comando/script más completo y seguro sería este uso:

```powershell
.\Mantenimiento.ps1 -RestartNow -EmptyRecycleBin -FullDefenderScan
```

Si el PC está muy lleno y estable:

```powershell
.\Mantenimiento.ps1 -RestartNow -EmptyRecycleBin -FullDefenderScan -ResetComponentStore
```

Si quieres una limpieza más agresiva bajo tu responsabilidad:

```powershell
.\Mantenimiento.ps1 -RestartNow -EmptyRecycleBin -FullDefenderScan -ResetComponentStore -DeletePrefetch -DisableHibernation
```

Y si además quieres instalar actualizaciones con el módulo comunitario:

```powershell
.\Mantenimiento.ps1 -RestartNow -EmptyRecycleBin -FullDefenderScan -ResetComponentStore -UsePSWindowsUpdate
```
