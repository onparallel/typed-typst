#!/bin/sh
# Builds the reflection dumper inside a pinned Rust image and writes the spec.
# Usage: tools/reflect/reflect.sh <output.json>
set -eu
IMAGE="rust:1.92-slim@sha256:bf3368a992915f128293ac76917ab6e561e4dda883273c8f5c9f6f8ea37a378e"
DIR="$(cd "$(dirname "$0")" && pwd)"
docker run --rm -v "$DIR":/w -v typst-reflect-cargo:/usr/local/cargo/registry -w /w "$IMAGE" \
  sh -c 'cargo build --release --locked -q -j 4 --bin typst-reflect-dump && ./target/release/typst-reflect-dump' > "$1"
