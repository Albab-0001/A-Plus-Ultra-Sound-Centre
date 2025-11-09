# PowerShell Script to Setup New Repository: A-Plus-Ultra-Sound-Centre
# This script will change the remote URL to the new repository

Write-Host "=== Setting Up New Repository: A-Plus-Ultra-Sound-Centre ===" -ForegroundColor Green
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "Error: package.json not found. Please run this script from the Client directory." -ForegroundColor Red
    exit 1
}

# New repository URL
$NewRepoUrl = "https://github.com/Albab-0001/A-Plus-Ultra-Sound-Centre.git"

Write-Host "Current remote:" -ForegroundColor Cyan
git remote -v

Write-Host ""
Write-Host "New repository URL: $NewRepoUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "IMPORTANT: Make sure you have created the repository on GitHub first!" -ForegroundColor Yellow
Write-Host "  - Go to: https://github.com/new" -ForegroundColor Yellow
Write-Host "  - Repository name: A-Plus-Ultra-Sound-Centre" -ForegroundColor Yellow
Write-Host "  - DO NOT initialize with README, .gitignore, or license" -ForegroundColor Yellow
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

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host ""
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git commit -m "Update project files

- Update project configuration and documentation
- Update repository references to A-Plus-Ultra-Sound-Centre
- Remove Lovable AI references"
} else {
    Write-Host ""
    Write-Host "No changes to commit." -ForegroundColor Green
}

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
Write-Host ""
git push -u origin master

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== Success! ===" -ForegroundColor Green
    Write-Host "Your code has been pushed to: $NewRepoUrl" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "=== Push Failed ===" -ForegroundColor Red
    Write-Host "Possible reasons:" -ForegroundColor Yellow
    Write-Host "  1. Repository doesn't exist on GitHub - create it first!" -ForegroundColor Yellow
    Write-Host "  2. Authentication failed - check your GitHub credentials" -ForegroundColor Yellow
    Write-Host "  3. Branch name mismatch - try: git push -u origin main" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "After creating the repository, run this script again." -ForegroundColor Cyan
}

