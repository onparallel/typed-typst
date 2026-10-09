# AGENTS.md

typed-typst: a TypeScript library that prints Typst source, typed from Typst's own definitions.
Read README.md, llms.txt and docs/design.md (§11 logs every decision; add an entry for yours).

## Rules

- Code, tests, docs and commits in English, with neutral example domains (reports, cards).
- No cheating: never loosen a check, cast or skip silently; say what a shortcut leaves out.
- Ask before a debatable API change. No `if`/`for` DSL (`unsafeRaw` is the escape hatch); files
  only as `path('literal')` or `unsafePath`.
- Commit small checkpoints. After an API change, `pnpm build` (local consumers may link `dist/`).
- A new way to make a function value or a binding keeps the rules on files and readers of
  SECURITY.md (`call`, `.with`, `let_` were the gaps), with its case in `test/security.test.ts`.
- Names printed from data (named-argument keys, labels in markup) are ASCII: Node knows a newer
  Unicode than Typst.
- Printing stays linear: no regular expression that can backtrack on data, no copy per merge.
- The repository is public: no internal names or process notes, no session links, no detail on how
  the security review was done, and no Typst bug described before it is reported upstream.

## Checks

- `pnpm typecheck && pnpm lint && pnpm format:check && pnpm gen:check && pnpm test && pnpm build`
- Generated code: edit `scripts/generate.ts` or `spec/overlay.ts`, then `pnpm gen`, never `src/gen/`.
  Its top-level calls stay `/* @__PURE__ */`; `gen/std` is the one module with a side effect.
- Corpora (byte-identical PDFs). After a library or converter change, reconvert and check both:

  ```sh
  ls test/suite/corpus/*.typ | tools/reflect/syntax.sh > suite.jsonl    # needs Docker
  node scripts/convert-suite.ts suite.jsonl && node scripts/check-converted.ts --check
  ls test/universe/corpus/*.typ | tools/reflect/syntax.sh > universe.jsonl
  node scripts/convert-suite.ts universe.jsonl --universe && node scripts/check-converted.ts --universe
  ```

  `check-converted.ts --universe <name>…` checks some templates; its PDFs stay in
  `.cache/universe/<name>/__orig__.pdf` and `__conv__.pdf`. Why the rest fail:
  `test/universe/README.md`.

## Versions

Typst `a.b.c` is package version `a.b.(c × 100 + r)` (`0.15.100`). Note API changes in CHANGELOG.md.
Releases: commit messages follow Conventional Commits (`fix:`, `feat:`, `docs:`, `chore:`…).
release-please (`.github/workflows/release-please.yml`) opens a release PR for `fix:` and `feat:`
commits, always bumping `r` (patch); merging it tags the release and stages it on npm (trusted
publishing, with provenance), where the maintainer approves it. For a new Typst version, add a
`Release-As: a.b.(c × 100)` footer to a commit. If merging the release PR starts no `Release Please`
run on `main`, push an empty `ci:` commit.
