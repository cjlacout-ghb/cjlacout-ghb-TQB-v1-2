# Port Utility Script (PowerShell)
# Usage: .\port_utils.ps1 -Port 3000 -Action "Kill"

param (
    [int]$Port,
    [string]$Action = "Check"
)

$process = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue | Select-Object -First 1

if ($process) {
    $pid = $process.OwningProcess
    $name = (Get-Process -Id $pid).ProcessName
    Write-Host "Port $Port is occupied by $name (PID: $pid)"
    
    if ($Action -eq "Kill") {
        Write-Host "Terminating process..."
        Stop-Process -Id $pid -Force
        Write-Host "Done."
    }
} else {
    Write-Host "Port $Port is free."
}
