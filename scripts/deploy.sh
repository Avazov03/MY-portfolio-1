#!/usr/bin/env bash
set -euo pipefail

HOST="${DEPLOY_HOST:-63.189.22.217}"
USER_NAME="${DEPLOY_USER:-ubuntu}"
KEY="${DEPLOY_KEY:-$HOME/.ssh/avazov-dev.uz}"
REMOTE_DIR="${DEPLOY_DIR:-/opt/avazov-portfolio}"
REPO="${DEPLOY_REPO:-https://github.com/Avazov03/MY-portfolio-1.git}"
BRANCH="${DEPLOY_BRANCH:-main}"

SSH=(ssh -i "$KEY" -o StrictHostKeyChecking=accept-new -o IdentitiesOnly=yes "${USER_NAME}@${HOST}")

echo "==> Deploying to ${USER_NAME}@${HOST}:${REMOTE_DIR}"

"${SSH[@]}" bash -s <<EOF
set -euo pipefail
if ! command -v docker >/dev/null 2>&1; then
  echo "==> Installing Docker"
  curl -fsSL https://get.docker.com | sh
  sudo usermod -aG docker "\$USER" || true
fi
if ! docker compose version >/dev/null 2>&1; then
  sudo apt-get update -y
  sudo apt-get install -y docker-compose-plugin || true
fi

sudo mkdir -p "$REMOTE_DIR"
sudo chown -R "\$USER":"\$USER" "$REMOTE_DIR"
if [ ! -d "$REMOTE_DIR/.git" ]; then
  git clone --branch "$BRANCH" "$REPO" "$REMOTE_DIR"
else
  cd "$REMOTE_DIR"
  git fetch origin
  git reset --hard "origin/$BRANCH"
fi
cd "$REMOTE_DIR"
docker compose build --pull
docker compose up -d
docker compose ps
echo "==> Done. Site should be on http://$HOST / http://avazov-dev.uz"
EOF
