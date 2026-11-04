@echo off
cd /d "%~dp0"
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\serve-demo.ps1"
if errorlevel 1 (
 echo.
 echo Could not start the demo. Please keep the full extracted folder together.
 pause
)
