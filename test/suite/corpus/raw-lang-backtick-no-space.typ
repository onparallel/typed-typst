// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-lang-backtick-no-space, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The language tag stops at a backtick even without whitespace.
// TODO: Do we want this behavior? It was not discussed in #7337.
#let raw = ```lang`test ` ```
#test(raw.lang, "lang")
#test(raw.text, "`test `")
#test(raw.block, false)
