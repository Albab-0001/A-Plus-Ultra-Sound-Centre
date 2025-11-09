# PowerShell Script to Push to GitHub
# A Plus Ultra Sound Centre

Write-Host "=== Pushing to GitHub ===" -ForegroundColor Green
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "Error: package.json not found. Please run this script from the Client directory." -ForegroundColor Red
    exit 1
}

# Check git status
Write-Host "Checking git status..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "Do you want to continue? (Y/N)" -ForegroundColor Yellow
$response = Read-Host

if ($response -ne "Y" -and $response -ne "y") {
    Write-Host "Cancelled." -ForegroundColor Red
    exit 0
}

# Add .gitignore if it was modified
Write-Host ""
Write-Host "Adding .gitignore..." -ForegroundColor Yellow
git add .gitignore

# Commit changes
Write-Host ""
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Update project files

- Update project configuration
- Update README.md with project information
- Update package.json with project details
- Improve project structure"

# Push to GitHub
Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin master

Write-Host ""
Write-Host "=== Done! ===" -ForegroundColor Green
Write-Host "Your code has been pushed to: https://github.com/Albab-0001/A-Plus-Ultra-Sound-Centre-" -ForegroundColor Cyan

