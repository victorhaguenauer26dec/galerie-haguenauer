@echo off
setlocal
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\update-site.ps1"
if errorlevel 1 (
  echo.
  echo The update could not be completed. Read the error message above.
)
echo.
pause
