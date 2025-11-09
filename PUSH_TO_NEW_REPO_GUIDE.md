# Guide: Push Project to New GitHub Repository

This guide will help you push your A Plus Ultra Sound Centre project to a new GitHub repository.

## Prerequisites

1. **Create a new repository on GitHub** (if you haven't already):
   - Go to https://github.com/new
   - Create a new repository (you can make it public or private)
   - **DO NOT** initialize it with README, .gitignore, or license (since you already have these files)
   - Copy the repository URL (e.g., `https://github.com/yourusername/your-new-repo.git`)

## Option 1: Replace Current Remote (Recommended)

This will change your current remote to point to the new repository.

### Step 1: Check Current Remote
```powershell
cd Client
git remote -v
```

### Step 2: Change Remote URL
```powershell
git remote set-url origin https://github.com/yourusername/your-new-repo.git
```

Replace `https://github.com/yourusername/your-new-repo.git` with your new repository URL.

### Step 3: Verify New Remote
```powershell
git remote -v
```

### Step 4: Commit Current Changes (if any)
```powershell
git add .
git commit -m "Update project files"
```

### Step 5: Push to New Repository
```powershell
git push -u origin master
```

If your default branch is `main` instead of `master`:
```powershell
git push -u origin main
```

## Option 2: Add New Remote (Keep Both)

If you want to keep the old repository and add a new one:

### Step 1: Add New Remote
```powershell
cd Client
git remote add new-origin https://github.com/yourusername/your-new-repo.git
```

### Step 2: Verify Remotes
```powershell
git remote -v
```

You should see both `origin` and `new-origin`.

### Step 3: Commit Current Changes (if any)
```powershell
git add .
git commit -m "Update project files"
```

### Step 4: Push to New Repository
```powershell
git push -u new-origin master
```

Or if your branch is `main`:
```powershell
git push -u new-origin main
```

## Option 3: Use the PowerShell Script

We've created a script to automate this process:

### Step 1: Run the Script
```powershell
cd Client
.\push-to-new-repo.ps1 -NewRepoUrl "https://github.com/yourusername/your-new-repo.git"
```

Replace the URL with your new repository URL.

## Authentication

When pushing, GitHub will ask for authentication. You have two options:

### Option A: Personal Access Token (Recommended)
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with `repo` permissions
3. Use the token as your password when pushing
4. Username: Your GitHub username

### Option B: SSH (More Secure)
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add SSH key to GitHub: Settings → SSH and GPG keys → New SSH key
3. Use SSH URL instead: `git@github.com:yourusername/your-new-repo.git`

## Troubleshooting

### Issue: Repository Already Exists on GitHub
If you initialized the repository with a README or other files on GitHub:
```powershell
git pull origin master --allow-unrelated-histories
# Resolve any conflicts, then:
git push -u origin master
```

### Issue: Authentication Failed
- Make sure you're using a Personal Access Token (not your password)
- Or set up SSH keys

### Issue: Branch Name Mismatch
If GitHub created a `main` branch but you're on `master`:
```powershell
# Option 1: Rename your local branch
git branch -M main
git push -u origin main

# Option 2: Push to master and GitHub will create it
git push -u origin master
```

### Issue: Permission Denied
- Make sure you have write access to the new repository
- Check that the repository URL is correct
- Verify your authentication token has the right permissions

## After Pushing

1. **Verify on GitHub**: Visit your new repository URL to confirm all files are there
2. **Update Documentation**: Update any references to the old repository URL
3. **Update CI/CD**: If you have any CI/CD pipelines, update them to use the new repository
4. **Notify Team**: If working with a team, let them know about the new repository

## Keep Old Repository (Optional)

If you want to keep both repositories:

1. **Add old repository as a second remote**:
   ```powershell
   git remote add old-origin https://github.com/Albab-0001/A-Plus-Ultra-Sound-Centre.git
   ```

2. **Push to old repository when needed**:
   ```powershell
   git push old-origin master
   ```

## Quick Reference

```powershell
# Change remote URL
git remote set-url origin <new-repo-url>

# Add new remote (keep old one)
git remote add new-origin <new-repo-url>

# Commit and push
git add .
git commit -m "Update project files"
git push -u origin master

# Check remotes
git remote -v

# Remove a remote
git remote remove <remote-name>
```

## Need Help?

If you encounter any issues:
- Check GitHub documentation: https://docs.github.com
- Check Git documentation: https://git-scm.com/doc
- Verify your repository URL is correct
- Make sure you have the right permissions on the new repository

