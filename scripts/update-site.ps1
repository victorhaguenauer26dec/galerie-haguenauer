param(
  [switch]$NoPublish
)

$ErrorActionPreference = "Stop"

function Normalize-Header([string]$Value) {
  $Value = $Value.Replace(([char]0x0153).ToString(), "oe")
  $Value = $Value.Replace(([char]0x0152).ToString(), "oe")
  $normalized = $Value.Normalize([Text.NormalizationForm]::FormD)
  $normalized = [regex]::Replace($normalized, "\p{Mn}", "")
  return [regex]::Replace($normalized.ToLowerInvariant(), "[^a-z0-9]", "")
}

function Get-CellText($Sheet, [int]$Row, [int]$Column) {
  if (-not $Column) {
    return ""
  }
  $value = $Sheet.Cells.Item($Row, $Column).Value2
  if ($null -eq $value) {
    return ""
  }
  $text = ([string]$value).Trim()
  if ($text -eq "NA" -or $text -eq "N/A") {
    return ""
  }
  return $text
}

function Get-WorkbookRows($Workbook, [string[]]$RequiredHeaders) {
  $sheet = $Workbook.Worksheets.Item(1)
  $usedRange = $sheet.UsedRange
  $headerRow = 0
  $columns = @{}
  $maxHeaderRow = [Math]::Min(15, $usedRange.Rows.Count)

  for ($row = 1; $row -le $maxHeaderRow; $row++) {
    $candidateColumns = @{}
    for ($column = 1; $column -le $usedRange.Columns.Count; $column++) {
      $header = Normalize-Header ([string]$sheet.Cells.Item($row, $column).Text)
      if ($header) {
        $candidateColumns[$header] = $column
      }
    }

    $hasRequiredHeaders = $true
    foreach ($requiredHeader in $RequiredHeaders) {
      if (-not $candidateColumns.ContainsKey($requiredHeader)) {
        $hasRequiredHeaders = $false
        break
      }
    }
    if ($hasRequiredHeaders) {
      $headerRow = $row
      $columns = $candidateColumns
      break
    }
  }

  if (-not $headerRow) {
    throw "Could not find the expected columns in workbook '$($Workbook.Name)'."
  }

  return @{
    Sheet = $sheet
    HeaderRow = $headerRow
    LastRow = $usedRange.Row + $usedRange.Rows.Count - 1
    Columns = $columns
  }
}

function Get-Column($Table, [string]$Name) {
  $key = Normalize-Header $Name
  if ($Table.Columns.ContainsKey($key)) {
    return [int]$Table.Columns[$key]
  }
  return 0
}

function Get-ImageFile($FileName, $FileMap, [string]$DirectoryName) {
  if ([string]::IsNullOrWhiteSpace($FileName) -or
      [IO.Path]::GetFileName($FileName) -cne $FileName -or
      $FileName -match "[\\/:]" -or
      $FileName -match '\.\.') {
    throw "Invalid image filename '$FileName' in the $DirectoryName folder catalogue."
  }

  $extension = [IO.Path]::GetExtension($FileName).ToLowerInvariant()
  if ($extension -notin @(".jpg", ".jpeg", ".png", ".webp", ".gif")) {
    throw "Unsupported image format '$FileName'. Use JPG, PNG, WebP, or GIF."
  }

  if (-not $FileMap.ContainsKey($FileName)) {
    throw "Image '$FileName' listed in Excel was not found in '$DirectoryName'."
  }
  return $FileMap[$FileName]
}

function Get-GitExecutable {
  $command = Get-Command git.exe -ErrorAction SilentlyContinue
  if ($command -and (Test-Path -LiteralPath $command.Source -PathType Leaf)) {
    return $command.Source
  }

  $candidates = @(
    (Join-Path $env:ProgramFiles "Git\cmd\git.exe"),
    (Join-Path $env:ProgramFiles "Git\bin\git.exe"),
    (Join-Path $env:LOCALAPPDATA "Programs\Git\cmd\git.exe"),
    (Join-Path $env:LOCALAPPDATA "Programs\Git\bin\git.exe")
  )
  if (${env:ProgramFiles(x86)}) {
    $candidates += (Join-Path ${env:ProgramFiles(x86)} "Git\cmd\git.exe")
  }

  foreach ($candidate in $candidates) {
    if (Test-Path -LiteralPath $candidate -PathType Leaf) {
      return $candidate
    }
  }

  $bundledGit = Get-ChildItem -Path (Join-Path $env:LOCALAPPDATA "github-copilot-git-*\cmd\git.exe") `
    -File -ErrorAction SilentlyContinue |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
  if ($bundledGit) {
    return $bundledGit.FullName
  }

  throw "Git was not found. Install Git for Windows from https://git-scm.com/download/win, then run this file again. To only rebuild a local preview, run scripts\update-site.ps1 -NoPublish."
}

function Get-CatalogueRecords($Workbook, $FileMap, [string]$Kind) {
  if ($Kind -eq "artworks") {
    $required = @("fichierimage")
  } else {
    $required = @("fichierimage")
  }

  $table = Get-WorkbookRows $Workbook $required
  $sheet = $table.Sheet
  $fileColumn = Get-Column $table "Fichier image"
  $yearColumn = Get-Column $table "Annee"
  $typeColumn = Get-Column $table "Type d oeuvre"
  $titleColumn = if ($Kind -eq "artworks") {
    Get-Column $table "Titre de l oeuvre"
  } else {
    Get-Column $table "Description"
  }
  $themeColumn = Get-Column $table "Thematique"
  $dimensionsColumn = Get-Column $table "Dimensions cm"
  $records = [Collections.Generic.List[object]]::new()
  $seenFiles = [Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)

  for ($row = $table.HeaderRow + 1; $row -le $table.LastRow; $row++) {
    $fileName = Get-CellText $sheet $row $fileColumn
    if (-not $fileName) {
      continue
    }
    if (-not $seenFiles.Add($fileName)) {
      throw "The Excel catalogue lists '$fileName' more than once."
    }

    $file = Get-ImageFile $fileName $FileMap $Kind
    $metadata = [ordered]@{}
    $yearText = Get-CellText $sheet $row $yearColumn
    if ($yearText) {
      $year = 0
      if (-not [int]::TryParse($yearText, [ref]$year) -or $year -lt 1000 -or $year -gt 2200) {
        throw "Invalid year '$yearText' for image '$fileName' in the Excel catalogue."
      }
      $metadata.year = $year
    }

    if ($Kind -eq "artworks") {
      foreach ($field in @(
        @{ Name = "type"; Column = $typeColumn },
        @{ Name = "title"; Column = $titleColumn },
        @{ Name = "theme"; Column = $themeColumn },
        @{ Name = "dimensions"; Column = $dimensionsColumn }
      )) {
        $value = Get-CellText $sheet $row $field.Column
        if ($value) {
          $metadata[$field.Name] = $value
        }
      }
      $records.Add([ordered]@{
        file = $file.Name
        metadata = $metadata
      })
    } else {
      $description = Get-CellText $sheet $row $titleColumn
      $records.Add([ordered]@{
        file = $file.Name
        year = if ($metadata.Contains("year")) { $metadata.year } else { $null }
        description = $description
      })
    }
  }

  return $records.ToArray()
}

$workspaceRoot = Split-Path -Parent $PSScriptRoot
$excelFiles = @(Get-ChildItem -LiteralPath $workspaceRoot -File -Filter "*.xlsx" |
  Where-Object { $_.Name -notmatch '^~\$' })
if ($excelFiles.Count -ne 2) {
  throw "Expected exactly two Excel workbooks in '$workspaceRoot'; found $($excelFiles.Count)."
}

$imageFolders = @{
  artworks = Join-Path $workspaceRoot "images"
  photographs = Join-Path $workspaceRoot "Photographies"
}
$fileMaps = @{}
foreach ($kind in @("artworks", "photographs")) {
  $folder = $imageFolders[$kind]
  if (-not (Test-Path -LiteralPath $folder -PathType Container)) {
    throw "Image folder not found: $folder"
  }
  $map = @{}
  foreach ($file in Get-ChildItem -LiteralPath $folder -File) {
    if ($map.ContainsKey($file.Name)) {
      throw "Two files in '$folder' have the same name ignoring letter case: $($file.Name)"
    }
    $map[$file.Name] = $file
  }
  $fileMaps[$kind] = $map
}

$excel = $null
$workbooks = [Collections.Generic.List[object]]::new()
try {
  $excel = New-Object -ComObject Excel.Application
  $excel.Visible = $false
  $excel.DisplayAlerts = $false
  foreach ($file in $excelFiles) {
    $workbooks.Add($excel.Workbooks.Open($file.FullName, 0, $true))
  }

  $artworkWorkbook = $null
  $photographWorkbook = $null
  foreach ($workbook in $workbooks) {
    $sheet = $workbook.Worksheets.Item(1)
    $isPhotographCatalogue = $false
    for ($column = 1; $column -le $sheet.UsedRange.Columns.Count; $column++) {
      if ((Normalize-Header ([string]$sheet.Cells.Item(1, $column).Text)) -eq "description") {
        $isPhotographCatalogue = $true
      }
    }
    if ($isPhotographCatalogue) {
      $photographWorkbook = $workbook
    } else {
      $artworkWorkbook = $workbook
    }
  }
  if (-not $artworkWorkbook -or -not $photographWorkbook) {
    throw "Could not distinguish the artworks workbook from the photography workbook."
  }

  $artworks = @(Get-CatalogueRecords $artworkWorkbook $fileMaps.artworks "artworks")
  $photographs = @(Get-CatalogueRecords $photographWorkbook $fileMaps.photographs "photographs")
  if (-not $artworks.Count) {
    throw "The artworks workbook contains no image entries."
  }

  $catalogue = [ordered]@{
    artworks = $artworks
    photographs = $photographs
  }
  $manifest = [ordered]@{
    artworks = @($artworks | ForEach-Object { "images/$($_.file)" })
    photographs = @($photographs | ForEach-Object { "Photographies/$($_.file)" })
  }
} finally {
  foreach ($workbook in $workbooks) {
    $workbook.Close($false)
    [void][Runtime.InteropServices.Marshal]::ReleaseComObject($workbook)
  }
  if ($excel) {
    $excel.Quit()
    [void][Runtime.InteropServices.Marshal]::ReleaseComObject($excel)
  }
}

$cataloguePath = Join-Path $workspaceRoot "catalogue-data.js"
$catalogueJson = ConvertTo-Json -InputObject $catalogue -Depth 20
[IO.File]::WriteAllText(
  $cataloguePath,
  "window.galleryCatalogue = $catalogueJson;",
  (New-Object System.Text.UTF8Encoding($false))
)

$manifestPath = Join-Path $workspaceRoot "gallery-assets.json"
$manifestJson = ConvertTo-Json -InputObject $manifest -Depth 5
[IO.File]::WriteAllText(
  $manifestPath,
  $manifestJson,
  (New-Object System.Text.UTF8Encoding($false))
)

$indexPath = Join-Path $workspaceRoot "index.html"
$index = [IO.File]::ReadAllText($indexPath)
$version = Get-Date -Format "yyyyMMdd-HHmmss"
$catalogueTag = '<script src="catalogue-data.js?v=' + $version + '" defer></script>'
$scriptTag = '<script src="script.js?v=' + $version + '" defer></script>'
if ($index -match '<script src="catalogue-data\.js[^"]*" defer></script>') {
  $index = [regex]::Replace($index, '<script src="catalogue-data\.js[^"]*" defer></script>', $catalogueTag)
} else {
  $index = [regex]::Replace($index, '<script src="script\.js[^"]*" defer></script>', "$catalogueTag`r`n    $scriptTag")
}
$index = [regex]::Replace($index, '<script src="script\.js[^"]*" defer></script>', $scriptTag)
$countText = "$($artworks.Count) " + [char]0x0153 + "uvres " + [char]0x00e0 + " d" + [char]0x00e9 + "couvrir"
$index = [regex]::Replace(
  $index,
  '(<p class="gallery-count" id="gallery-count">)[^<]*(</p>)',
  ('${1}' + $countText + '${2}')
)
$index = [regex]::Replace(
  $index,
  '<span class="hero-index" aria-hidden="true">[^<]*</span>',
  ('<span class="hero-index" aria-hidden="true">01 / ' + $artworks.Count + '</span>')
)
$featuredSources = @(
  "images/" + [Net.WebUtility]::HtmlEncode($artworks[0].file)
  "images/" + [Net.WebUtility]::HtmlEncode($artworks[[Math]::Min(1, $artworks.Count - 1)].file)
)
$heroVisual = [regex]::Match(
  $index,
  '<span class="hero-artwork-visual">.*?</span>',
  [System.Text.RegularExpressions.RegexOptions]::Singleline
)
if (-not $heroVisual.Success) {
  throw "Could not find the featured artwork images in index.html."
}
$heroImageMatches = [regex]::Matches($heroVisual.Value, '(<img[^>]*src=")[^"]+(")')
if ($heroImageMatches.Count -ne 2) {
  throw "Expected two featured artwork image slots in index.html."
}
$updatedHeroVisual = $heroVisual.Value
for ($imageIndex = $heroImageMatches.Count - 1; $imageIndex -ge 0; $imageIndex--) {
  $match = $heroImageMatches[$imageIndex]
  $replacement = $match.Groups[1].Value + $featuredSources[$imageIndex] + $match.Groups[2].Value
  $updatedHeroVisual = $updatedHeroVisual.Substring(0, $match.Index) +
    $replacement +
    $updatedHeroVisual.Substring($match.Index + $match.Length)
}
$index = $index.Replace($heroVisual.Value, $updatedHeroVisual)
[IO.File]::WriteAllText($indexPath, $index, (New-Object System.Text.UTF8Encoding($false)))

Write-Host ""
Write-Host "Catalogue prepared: $($artworks.Count) artworks and $($photographs.Count) photographs."
Write-Host "Images not listed in either Excel workbook will not be copied to the published site."

& (Join-Path $PSScriptRoot "prepare-site.ps1")

if ($NoPublish) {
  Write-Host "Local preview files are ready in the _site folder. Nothing was staged or published."
  exit 0
}

$gitExecutable = Get-GitExecutable
$branch = (& $gitExecutable -C $workspaceRoot branch --show-current).Trim()
if ($LASTEXITCODE -ne 0 -or $branch -ne "main") {
  throw "Switch to the main branch before publishing. Current branch: '$branch'."
}

& $gitExecutable -C $workspaceRoot diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  throw "There are already staged Git changes. Commit or unstage them before running this script."
}

$pathsToStage = @(
  "index.html",
  "script.js",
  "catalogue-data.js",
  "gallery-assets.json",
  "scripts/prepare-site.ps1",
  "scripts/update-site.ps1",
  "Mettre-a-jour-le-site.bat"
) + @($manifest.artworks) + @($manifest.photographs)
$gitArgs = @("-C", $workspaceRoot, "add", "--") + $pathsToStage
& $gitExecutable @gitArgs
if ($LASTEXITCODE -ne 0) {
  throw "Git could not stage the website files."
}

& $gitExecutable -C $workspaceRoot diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "The website is already up to date; no commit or publication is needed."
  exit 0
}

$commitMessage = "Update gallery from Excel catalogues ($(Get-Date -Format 'yyyy-MM-dd HH:mm'))"
& $gitExecutable -C $workspaceRoot commit -m $commitMessage
if ($LASTEXITCODE -ne 0) {
  throw "Git could not create the update commit."
}

& $gitExecutable -C $workspaceRoot push origin main
if ($LASTEXITCODE -ne 0) {
  throw "The push failed. Check your internet connection and GitHub credentials, then run the script again."
}

Write-Host ""
Write-Host "Changes pushed to GitHub. GitHub Pages will publish the site automatically."
