#!/usr/bin/env bash
# On the server: keep this file in the app root next to docker-compose.yml, e.g.
#   /opt/gposapp/gpos-webapp.sh
# Same folder as backup-before-deploy.sh (repo root after rsync).
set -euo pipefail

cd "$(dirname "$0")"

echo "[gpos-webapp] Building image..."
docker compose build --pull

echo "[gpos-webapp] Recreating container on port 7570..."
docker compose up -d --force-recreate --remove-orphans

echo "[gpos-webapp] Status:"
docker compose ps

echo "[gpos-webapp] Done. App: http://$(hostname -I 2>/dev/null | awk '{print $1}' || echo SERVER):7570"
