#!/usr/bin/env bash
# On the server: keep this file in the app root next to docker-compose.yml, e.g.
#   /opt/dashboard/dashboard.sh
# Same folder as backup-before-deploy.sh (repo root after rsync).
set -euo pipefail

cd "$(dirname "$0")"

echo "[dashboard] Building image..."
docker compose build --pull

echo "[dashboard] Recreating container on port 7571..."
docker compose up -d --force-recreate --remove-orphans

echo "[dashboard] Status:"
docker compose ps

echo "[dashboard] Done. App: http://$(hostname -I 2>/dev/null | awk '{print $1}' || echo SERVER):7571"
