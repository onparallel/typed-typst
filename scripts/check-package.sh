#!/usr/bin/env bash
# Packs the package as npm would publish it, installs it in an empty project, and checks
# test/package/consumer.ts there: under the oldest and newest TypeScript 5 and under
# TypeScript 6, with `nodenext` and `bundler` module resolution, and then runs it with Node.
set -euo pipefail
cd "$(dirname "$0")/.."
TS_VERSIONS=(5.4.5 5.9.3 6.0.3)

pnpm build >/dev/null
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
npm pack --silent --pack-destination "$work" >/dev/null
mkdir "$work/consumer"
cp test/package/consumer.ts "$work/consumer/"
cd "$work/consumer"
echo '{ "name": "consumer", "private": true, "type": "module" }' >package.json
deps=("$work"/typed-typst-*.tgz @types/node@24.19.1)
for v in "${TS_VERSIONS[@]}"; do deps+=("ts-$v@npm:typescript@$v"); done
npm install --silent --no-audit --no-fund --ignore-scripts "${deps[@]}"

for v in "${TS_VERSIONS[@]}"; do
  for resolution in nodenext bundler; do
    module=$([ "$resolution" = nodenext ] && echo nodenext || echo esnext)
    cat >tsconfig.json <<JSON
{
  "compilerOptions": {
    "strict": true, "target": "es2022", "module": "$module", "moduleResolution": "$resolution",
    "noEmit": true, "skipLibCheck": false, "types": ["node"]
  },
  "files": ["consumer.ts"]
}
JSON
    echo "TypeScript $v, $resolution"
    node "node_modules/ts-$v/bin/tsc" -p .
  done
done
echo "Node $(node --version)"
node consumer.ts >/dev/null
echo "require() of the entry points"
node -e "require('typed-typst'); require('typed-typst/node'); require('typed-typst/eslint')"
echo ok
