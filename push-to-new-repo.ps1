# PowerShell Script to Push to New GitHub Repository
# A Plus Ultra Sound Centre

param(
    [Parameter(Mandatory=$true)]
    [string]$NewRepoUrl
)

Write-Host "=== Pushing to New GitHub Repository ===" -ForegroundColor Green
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
Write-Host "Current remote:" -ForegroundColor Cyan
git remote -v

Write-Host ""
Write-Host "New repository URL: $NewRepoUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "Do you want to continue? (Y/N)" -ForegroundColor Yellow
$response = Read-Host

if ($response -ne "Y" -and $response -ne "y") {
    Write-Host "Cancelled." -ForegroundColor Red
    exit 0
}

# Add all changes
Write-Host ""
Write-Host "Adding all changes..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host ""
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Update project files

- Update project configuration
- Update README.md with project information
- Update package.json with project details
- Improve project structure"

# Change remote to new repository
Write-Host ""
Write-Host "Changing remote to new repository..." -ForegroundColor Yellow
git remote set-url origin $NewRepoUrl

# Verify new remote
Write-Host ""
Write-Host "New remote configuration:" -ForegroundColor Cyan
git remote -v

# Push to new repository
Write-Host ""
Write-Host "Pushing to new repository..." -ForegroundColor Yellow
Write-Host "Note: You may need to authenticate with GitHub" -ForegroundColor Yellow
git push -u origin master

Write-Host ""
Write-Host "=== Done! ===" -ForegroundColor Green
Write-Host "Your code has been pushed to: $NewRepoUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "If you want to keep the old remote as well, you can add it as a second remote:" -ForegroundColor Yellow
Write-Host "  git remote add old-origin <old-repo-url>" -ForegroundColor Gray

