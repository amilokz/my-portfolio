@echo off
echo Cleaning previous build...
rd /s /q dist 2>nul

echo Building project...
call npm run build

echo Creating .nojekyll file...
echo. > dist\.nojekyll

echo Deploying to GitHub Pages...
call npm run deploy

echo Done! Check https://amilokz.github.io/my-portfolio/
pause