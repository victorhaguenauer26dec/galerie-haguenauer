$ErrorActionPreference = "Stop"

$workspaceRoot = Split-Path -Parent $PSScriptRoot
$outputPath = Join-Path $workspaceRoot "_site"
$imageSource = Join-Path $workspaceRoot "images"

if (Test-Path -LiteralPath $outputPath) {
  Remove-Item -LiteralPath $outputPath -Recurse -Force
}

New-Item -Path $outputPath -ItemType Directory | Out-Null
New-Item -Path (Join-Path $outputPath "images") -ItemType Directory | Out-Null

foreach ($file in @("index.html", "styles.css", "script.js")) {
  Copy-Item -LiteralPath (Join-Path $workspaceRoot $file) -Destination $outputPath
}

Copy-Item -Path (Join-Path $imageSource "*.jpg") -Destination (Join-Path $outputPath "images")
Copy-Item -Path (Join-Path $imageSource "*.png") -Destination (Join-Path $outputPath "images")

$photographySource = Join-Path $workspaceRoot "Photographies"
if (Test-Path -LiteralPath $photographySource) {
  $photographyOutput = Join-Path $outputPath "Photographies"
  New-Item -Path $photographyOutput -ItemType Directory | Out-Null
  Copy-Item -Path (Join-Path $photographySource "*") -Destination $photographyOutput
}
