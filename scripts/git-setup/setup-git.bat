@echo off
echo Setting up Git repository for event-card-generator...

echo.
echo Step 1: Removing existing git repository...
if exist .git (
    rmdir /s /q .git
    echo Existing .git directory removed.
) else (
    echo No existing .git directory found.
)

echo.
echo Step 2: Initializing new git repository...
git init

echo.
echo Step 3: Adding remote origin...
git remote add origin https://github.com/stl-tech-handyman/invitations.git

echo.
echo Step 4: Adding all files to git...
git add .

echo.
echo Step 5: Making initial commit...
git commit -m "Initial commit"

echo.
echo Step 6: Pushing to remote repository...
git push -u origin main

echo.
echo Git repository setup complete!
echo.
pause
