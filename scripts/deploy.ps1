param(
  [string]$HostAddress = "63.189.22.217",
  [string]$User = "ubuntu",
  [string]$Key = "$env:USERPROFILE\.ssh\avazov-dev.uz",
  [string]$RemoteDir = "/opt/avazov-portfolio",
  [string]$Repo = "https://github.com/Avazov03/MY-portfolio-1.git",
  [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"
if (-not (Test-Path $Key)) { throw "SSH key not found: $Key" }

$remote = @"
set -euo pipefail
if ! command -v docker >/dev/null 2>&1; then
  echo '==> Installing Docker'
  curl -fsSL https://get.docker.com | sh
  sudo usermod -aG docker "`$USER" || true
fi
if ! docker compose version >/dev/null 2>&1; then
  sudo apt-get update -y
  sudo apt-get install -y docker-compose-plugin || true
fi
sudo mkdir -p $RemoteDir
sudo chown -R "`$USER":"`$USER" $RemoteDir
if [ ! -d $RemoteDir/.git ]; then
  git clone --branch $Branch $Repo $RemoteDir
else
  cd $RemoteDir
  git fetch origin
  git reset --hard origin/$Branch
fi
cd $RemoteDir
docker compose build --pull
docker compose up -d
docker compose ps
echo '==> Done'
"@

Write-Host "==> Deploying to ${User}@${HostAddress}:${RemoteDir}"
$remote | ssh -i $Key -o StrictHostKeyChecking=accept-new -o IdentitiesOnly=yes "${User}@${HostAddress}" "bash -s"
