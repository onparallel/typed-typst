# Typst test suite reproductions

`original/` holds cases copied from Typst's own test suite (`tests/suite/` in
https://github.com/typst/typst at the tag in `typst-version`, Apache-2.0,
copyright Typst contributors) by `scripts/extract-suite.ts`. `cases.ts`
rebuilds each case with the library; `out/` holds the printed sources.
`test/suite.test.ts` renders both to PNG and requires identical pixels.

To add a case: `node scripts/extract-suite.ts <typst checkout> <case name>`,
then add its reproduction to `cases.ts`.

## The converted corpus

`corpus/` holds every suite case that can be reproduced at all:
`node scripts/extract-suite.ts <typst checkout> --corpus`. That is every case
whose output is a PDF (`paged`, `pdf`, `pdftags`) or that only runs code
(`eval`, whose PDF is compared too), and that expects no error or warning (the
API does not print invalid source), does not test the parser, does not use
the runner's `bounds` layout debugger, test packages (`@test/…`) or files next
to the test, and is not HTML (in development in Typst). Typst 0.15.1's suite
has 3,684 cases; 2,380 qualify. A case's attributes are in its header: the
comparison enforces its PDF standards (`pdfstandard(ua-1)`), and, as the
runner does, names an untitled document after the case, sets today to
1970-01-01 at noon and enables Typst's in-development features.

The comparison uses typst-dev-assets (`tools/dev-assets.sh`) for fonts, images
and data, defines the runner's helpers (`test`, `test-repr`, `print`, `lines`)
in Typst (the conversions declare them with `define(…).external()`, as
functions from outside the document), and compiles each case in its directory of Typst's repository, as
Typst's own runner does. A case whose original does not compile there is
reported as `original-error`.

`scripts/convert-suite.ts` turns each case into TypeScript that uses the
library (`converted/`), from the syntax tree of Typst's own parser
(`tools/reflect/syntax.sh`). Where the API has no equivalent (loops,
conditions, methods on arbitrary values…) it falls back to an `unsafeRaw`
snippet of the original, at the smallest expression or statement. Its
`report.json` says, per case, whether the API alone was enough, which
snippets were needed and why, or why the case could not be converted.

`scripts/check-converted.ts` compiles every conversion and its original to PDF
and compares the bytes, and type-checks the conversions (a case passes only if
both hold); `converted.results.json` records the last full run, and
`pnpm test:corpus` fails unless every case passes or fails as
`known-failures.ts` says (empty: every case passes).
