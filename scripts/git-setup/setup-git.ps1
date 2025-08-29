Write-Host "Setting up Git repository for event-card-generator..." -ForegroundColor Green

Write-Host "`nStep 1: Removing existing git repository..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Remove-Item -Recurse -Force ".git"
    Write-Host "Existing .git directory removed." -ForegroundColor Green
} else {
    Write-Host "No existing .git directory found." -ForegroundColor Yellow
}

Write-Host "`nStep 2: Initializing new git repository..." -ForegroundColor Yellow
git init

Write-Host "`nStep 3: Adding remote origin..." -ForegroundColor Yellow
git remote add origin https://github.com/stl-tech-handyman/invitations.git

Write-Host "`nStep 4: Adding all files to git..." -ForegroundColor Yellow
git add .

Write-Host "`nStep 5: Making initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit"

Write-Host "`nStep 6: Pushing to remote repository..." -ForegroundColor Yellow
git push -u origin main

Write-Host "`nGit repository setup complete!" -ForegroundColor Green
Write-Host "`nPress any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
