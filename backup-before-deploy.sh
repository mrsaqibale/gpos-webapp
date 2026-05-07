#!/usr/bin/env bash
# Lives next to gpos-webapp.sh on the server, e.g. /opt/gposapp/backup-before-deploy.sh
# Copies the current app tree into ./backup/NNN_backup_YYYY-MM-DD_HH-MM-SS/ (excludes ./backup).
set -euo pipefail

APP_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKUP_ROOT="${APP_ROOT}/backup"

if ! find "$APP_ROOT" -mindepth 1 -maxdepth 1 ! -name backup -print -quit | grep -q .; then
  echo "[backup] Nothing to backup (empty dir or only backup/)."
  exit 0
fi

mkdir -p "$BACKUP_ROOT"

max=0
shopt -s nullglob
for dir in "${BACKUP_ROOT}"/*/; do
  [[ -d "$dir" ]] || continue
  base="$(basename "$dir")"
  if [[ "$base" =~ ^([0-9]{3})_backup_ ]]; then
    n=$((10#${BASH_REMATCH[1]}))
    (( n > max )) && max=$n
  fi
done

next=$((max + 1))
next_fmt="$(printf '%03d' "$next")"
ts="$(date +%Y-%m-%d_%H-%M-%S)"
dest="${BACKUP_ROOT}/${next_fmt}_backup_${ts}"

echo "[backup] Saving previous app to ${dest} ..."
mkdir -p "$dest"
rsync -a --exclude 'backup/' "${APP_ROOT}/" "${dest}/"

echo "[backup] Done (${next_fmt}, ${ts})."
