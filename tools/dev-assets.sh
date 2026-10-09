#!/bin/sh
# Fetches typst-dev-assets (the images, fonts and data files of Typst's test suite)
# at the tag of the pinned Typst version, into .cache/typst-dev-assets.
set -eu
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VERSION="$(cat "$ROOT/typst-version")"
DEST="$ROOT/.cache/typst-dev-assets"
if [ ! -d "$DEST" ]; then
  git clone -q --depth 1 --branch "v$VERSION" https://github.com/typst/typst-dev-assets "$DEST"
fi
TAG="$(git -C "$DEST" describe --tags --exact-match)"
[ "$TAG" = "v$VERSION" ] || { echo "typst-dev-assets is at $TAG, expected v$VERSION" >&2; exit 1; }
# A tag can move: the commit it pointed to when the version was pinned (docs/upgrading-typst.md).
COMMIT=53c12796fc6c62e12af8788ab80ebed686d5eedb
[ "$(git -C "$DEST" rev-parse HEAD)" = "$COMMIT" ] || { echo "typst-dev-assets v$VERSION is not commit $COMMIT" >&2; exit 1; }
