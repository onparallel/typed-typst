# Moving to a new Typst version

The bindings target exactly one Typst version, the one in `typst-version`.
Moving to another one regenerates them from that version's definitions, then
checks the library against that version's test suite and the Typst Universe
templates. The steps below use `X.Y.Z` for the new version.

## 1. Pin the version

Every pin, in one change:

| File                                       | What                                              |
| ------------------------------------------ | ------------------------------------------------- |
| `typst-version`                            | `X.Y.Z` (the scripts read it)                     |
| `tools/reflect/Cargo.toml`                 | `typst = "=X.Y.Z"`, then `Cargo.lock` (step 2)    |
| `package.json`                             | the `reflect` script's output, `spec/typst-X.Y.Z.json` |
| `.github/workflows/ci.yml`                 | `TYPST_VERSION`, and `TYPST_SHA256`: the sha256 of the release's `typst-x86_64-unknown-linux-musl.tar.xz` |
| the `typst` CLI on your machine            | `typst --version` must print `X.Y.Z` (`pnpm typst:check`) |

If the new Typst needs a newer Rust, update the image (by digest) in
`tools/reflect/reflect.sh` and `tools/reflect/syntax.sh`.

## 2. Reflect and regenerate

```sh
pnpm reflect          # needs Docker; writes spec/typst-X.Y.Z.json (updates Cargo.lock)
git rm spec/typst-<old>.json
pnpm gen              # src/gen/ from the spec and spec/overlay.ts
pnpm typecheck
```

Read the diff of `spec/` before the one of `src/gen/`: it shows what Typst
changed (functions, parameters, types, symbols). Then go through
`spec/overlay.ts`: each correction names the function and parameter it
corrects, and `pnpm gen` fails on one whose target is gone. Check that the
rest still say something true: a parameter whose shape Typst now reflects, a
callback that takes other arguments, a type that was renamed.

The tools/reflect dumpers use Typst's Rust API, which can change between
versions: fix them first if they no longer build.

## 3. The library's own rules

Some rules come from probing Typst, not from the spec, and the tests check
them against the installed binary:

- **Escaping** (`src/escape.ts`, docs/design.md §6.2): which characters start
  markup. Read the changes to `crates/typst-syntax/src/lexer.rs` and
  `parser.rs` between the two tags; a new markup syntax needs a new escape.
  `test/injection.test.ts` and `test/fuzz.test.ts` compile random text and
  require it back unchanged.
- **Code in markup, numbers, layout** (§6.3–6.5).
- **Elements and contextual functions** listed by hand in `spec/overlay.ts`.

Run `pnpm test`; its snapshot tests show every change in the printed source.
Update a snapshot (`pnpm test -u`) only after reading why it changed.

## 4. The corpora

Both need a checkout of Typst at the new tag and Docker.

```sh
git clone --depth 1 --branch vX.Y.Z https://github.com/typst/typst <checkout>
node scripts/extract-suite.ts <checkout> --corpus
node scripts/extract-suite.ts <checkout> <case>…  # refresh test/suite/original/, the cases in cases.ts
rm -rf .cache/typst-dev-assets && tools/dev-assets.sh   # after updating COMMIT in it to the tag's commit
```

Then re-list the Universe templates. `test/universe/packages.json` has every
template under a permissive license whose document compiles with the pinned
Typst; templates published since may now qualify, and some may stop
compiling (update their version, or drop them and say so in
`test/universe/README.md`). Run `node scripts/extract-universe.ts`.

Convert and check both, as in AGENTS.md:

```sh
ls test/suite/corpus/*.typ | tools/reflect/syntax.sh > suite.jsonl
node scripts/convert-suite.ts suite.jsonl && node scripts/check-converted.ts --check
ls test/universe/corpus/*.typ | tools/reflect/syntax.sh > universe.jsonl
node scripts/convert-suite.ts universe.jsonl --universe && node scripts/check-converted.ts --universe --check
```

`--check` fails on any case that does not pass and is not in
`known-failures.ts`, and on a listed case that passes now or fails
differently. Each new failure is a library bug, a converter gap or a change
in Typst: find which and fix it, or list it with its evidence. Update the
counts in README.md, `test/suite/README.md` and `test/universe/README.md`.

## 5. Release

- Every `0.15.1` in prose (README.md, llms.txt, docs/design.md, the bundle
  test's comment) names the new version. `git grep -n '<old version>'` finds
  them, outside the corpora and `spec/`.
- The package version starts over for the new Typst version: Typst `X.Y.Z` is
  `X.Y.(Z × 100)` (see the README).
- CHANGELOG.md: the new Typst version, what changed in the bindings that a
  user sees (removed or renamed functions and parameters), and any change to
  the library's own API.
- Tell the projects that use the package: their documents may print
  differently, and `checkTypstVersion()` will reject their old binary.
