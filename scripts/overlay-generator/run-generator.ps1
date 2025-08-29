Write-Host "🎨 Event Card Overlay Generator" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "This will generate 200 unique SVG overlays" -ForegroundColor Yellow
Write-Host ""

$confirmation = Read-Host "Press Enter to continue or Ctrl+C to cancel"
Write-Host ""
Write-Host "Starting generation..." -ForegroundColor Green

try {
    node generate-overlays-node.js
    Write-Host ""
    Write-Host "✅ Generation complete!" -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "❌ Error occurred: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
