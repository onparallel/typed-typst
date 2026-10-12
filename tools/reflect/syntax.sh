#!/bin/sh
# Dumps the syntax trees of the .typ files listed on stdin (paths relative to the repo root).
# Usage: ls test/suite/original/*.typ | tools/reflect/syntax.sh > out.jsonl
set -eu
IMAGE="rust:1.92-slim@sha256:bf3368a992915f128293ac76917ab6e561e4dda883273c8f5c9f6f8ea37a378e"
DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$DIR/../.." && pwd)"
docker run --rm -i -v "$ROOT":/repo -v typst-reflect-cargo:/usr/local/cargo/registry -w /repo/tools/reflect "$IMAGE" \
  sh -c 'cargo build --release --locked -q -j 4 --bin syntax && cd /repo && ./tools/reflect/target/release/syntax'
