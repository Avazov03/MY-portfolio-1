# Submit sitemap URLs to IndexNow (Bing / Yandex / etc.)
# Requires: key file at site root = {key}.txt with key body (also indexnow-key.txt locally).
param(
  [string]$HostName = "avazov-dev.uz",
  [string]$KeyFile = ""
)

$ErrorActionPreference = "Stop"
$Root = Split-Path $PSScriptRoot -Parent

if (-not $KeyFile) {
  $KeyFile = Join-Path $Root "indexnow-key.txt"
}
if (-not (Test-Path $KeyFile)) {
  throw "IndexNow key file missing: $KeyFile"
}
$key = (Get-Content $KeyFile -Raw).Trim()
$keyLocation = "https://$HostName/$key.txt"

$sitemapPath = Join-Path $Root "sitemap.xml"
[xml]$sx = Get-Content $sitemapPath
$ns = New-Object System.Xml.XmlNamespaceManager($sx.NameTable)
$ns.AddNamespace("sm", "http://www.sitemaps.org/schemas/sitemap/0.9")
$urlList = @($sx.SelectNodes("//sm:loc", $ns) | ForEach-Object { $_.InnerText })
if ($urlList.Count -eq 0) {
  throw "No URLs found in sitemap.xml"
}

$body = @{
  host        = $HostName
  key         = $key
  keyLocation = $keyLocation
  urlList     = $urlList
} | ConvertTo-Json -Depth 4

Write-Host "Submitting $($urlList.Count) URLs via IndexNow..."
$resp = Invoke-WebRequest -Uri "https://api.indexnow.org/indexnow" `
  -Method POST `
  -ContentType "application/json; charset=utf-8" `
  -Body ([System.Text.Encoding]::UTF8.GetBytes($body)) `
  -UseBasicParsing
Write-Host "IndexNow status: $($resp.StatusCode)"
