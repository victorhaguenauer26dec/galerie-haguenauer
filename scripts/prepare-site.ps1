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

$catalogueScript = Join-Path $workspaceRoot "catalogue-data.js"
if (-not (Test-Path -LiteralPath $catalogueScript)) {
  throw "The generated catalogue file is missing. Run Mettre-a-jour-le-site.bat first."
}
Copy-Item -LiteralPath $catalogueScript -Destination $outputPath

$manifestPath = Join-Path $workspaceRoot "gallery-assets.json"
if (-not (Test-Path -LiteralPath $manifestPath)) {
  throw "The gallery asset list is missing. Run Mettre-a-jour-le-site.bat first."
}

$manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
$photographyOutput = Join-Path $outputPath "Photographies"
New-Item -Path $photographyOutput -ItemType Directory | Out-Null

$copiedAssets = @{}
foreach ($assetPath in @($manifest.artworks) + @($manifest.photographs)) {
  if ([string]::IsNullOrWhiteSpace($assetPath) -or $assetPath -match '(^|[\\/])\.\.([\\/]|$)') {
    throw "Invalid path in gallery-assets.json: $assetPath"
  }

  if ($assetPath -notmatch '^(images|Photographies)/([^\\/]+)$') {
    throw "Unsupported path in gallery-assets.json: $assetPath"
  }

  if ($copiedAssets.ContainsKey($assetPath)) {
    throw "Duplicate path in gallery-assets.json: $assetPath"
  }
  $copiedAssets[$assetPath] = $true

  $sourceDirectory = if ($Matches[1] -eq "images") {
    $imageSource
  } else {
    Join-Path $workspaceRoot "Photographies"
  }
  $sourcePath = Join-Path $sourceDirectory $Matches[2]
  if (-not (Test-Path -LiteralPath $sourcePath -PathType Leaf)) {
    throw "A listed gallery image is missing: $sourcePath"
  }

  $destinationDirectory = if ($Matches[1] -eq "images") {
    Join-Path $outputPath "images"
  } else {
    $photographyOutput
  }
  Copy-Item -LiteralPath $sourcePath -Destination $destinationDirectory
}
