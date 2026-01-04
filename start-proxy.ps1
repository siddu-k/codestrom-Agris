# PowerShell script to run proxy in background
Write-Host "Starting Xiaomi Proxy Server..." -ForegroundColor Cyan
Write-Host "Proxy will run on http://localhost:3001" -ForegroundColor Green
Write-Host ""
Write-Host "To stop the proxy, close this window" -ForegroundColor Yellow
Write-Host "=" -ForegroundColor Gray -NoNewline
Write-Host ("=" * 50) -ForegroundColor Gray
Write-Host ""

# Start the proxy
node local-proxy.js

# Keep window open if there's an error
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Proxy failed to start!" -ForegroundColor Red
    Write-Host "Make sure Node.js is installed: https://nodejs.org" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
}
