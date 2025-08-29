param(
  [string[]] $Dirs = @(
    "C:\Users\Alexey\Code\event-card-generator\backgrounds",
    "C:\Users\Alexey\Code\event-card-generator\elements"
  ),
  [string] $Prefix = "i"
)

function Rename-FilesInDir {
  param([string]$Dir, [string]$Prefix)

  if (-not (Test-Path $Dir)) {
    Write-Warning "Directory not found: $Dir"
    return
  }

  # Pattern for already-standard names: i-123 or i-123.ext
  $regex = "^{0}-\d+(\.[^.]*)?$" -f [regex]::Escape($Prefix)

  # Sort files by creation time
  $files = Get-ChildItem -LiteralPath $Dir -File | Sort-Object CreationTime, Name

  # Find the max index already used
  $existingIndices = $files |
    Where-Object { $_.Name -match $regex } |
    ForEach-Object {
      if ($_.BaseName -match "^{0}-(\d+)$" -f [regex]::Escape($Prefix)) { [int]$Matches[1] }
      elseif ($_.Name -match "^{0}-(\d+)\." -f [regex]::Escape($Prefix)) { [int]$Matches[1] }
    }

  $next = if ($existingIndices) { ($existingIndices | Measure-Object -Maximum).Maximum + 1 } else { 1 }

  foreach ($f in $files) {
    if ($f.Name -match $regex) { continue } # already correct

    $ext = $f.Extension
    $candidate = "{0}-{1}{2}" -f $Prefix, $next, $ext

    # Avoid overwriting existing files
    while (Test-Path -LiteralPath (Join-Path $Dir $candidate)) {
      $next++
      $candidate = "{0}-{1}{2}" -f $Prefix, $next, $ext
    }

    Rename-Item -LiteralPath $f.FullName -NewName $candidate
    Write-Host "$($f.Name) -> $candidate"
    $next++
  }
}

foreach ($d in $Dirs) {
  Write-Host "Processing $d ..."
  Rename-FilesInDir -Dir $d -Prefix $Prefix
}
