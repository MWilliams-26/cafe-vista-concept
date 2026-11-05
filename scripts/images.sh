#!/usr/bin/env bash
# Rebuilds the WebP images in public/assets/img from Cafe Vista's own photography,
# as published on cafevistahoboken.com (hosted on imgur). See RESEARCH.md > Asset record.
# Needs curl and ImageMagick 7 (`magick`).
set -euo pipefail
cd "$(dirname "$0")/.."
out=public/assets/img
src=$(mktemp -d)
trap 'rm -rf "$src"' EXIT
mkdir -p "$out"

# name  imgur-id  widths
images=(
	"matcha X0CCi3m 640,1100"
	"pistachio-latte MlGBOw5 480,900"
	"cappuccino ioYLlON 480,900"
	"croissant cP2gGzU 480,900"
	"scone udqOy3o 480,900"
	"spread pdndjKY 640,1100"
	"bird-breakfast XaBEoHa 640,1100"
	"flowers-cup hNuETFt 640,1100"
	"scone-flowers FCk2lWF 900,1600"
	"founder XVcqfVA 900,1600"
	"window-seat y3n1Swq 900,1600"
	"mural-table lZW4xD4 640,1100"
	"espresso-bar wTTwV59 900,1600"
)

for row in "${images[@]}"; do
	read -r name id widths <<<"$row"
	curl -sfL -A "Mozilla/5.0" "https://i.imgur.com/$id.jpeg" -o "$src/$id.jpeg"
	for w in ${widths//,/ }; do
		magick "$src/$id.jpeg" -auto-orient -resize "${w}x>" -strip -quality 78 "$out/$name-$w.webp"
	done
	echo "$name done"
done

# Social preview card (1200x630) from the scone, latte and flowers photo.
magick "$src/FCk2lWF.jpeg" -resize 1200x630^ -gravity center -extent 1200x630 -strip -quality 82 public/assets/og.jpg
