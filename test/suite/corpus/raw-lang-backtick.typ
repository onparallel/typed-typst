// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-lang-backtick, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let raw = ```lang ` ```
#test(raw.lang, "lang")
#test(raw.text, "`")
#test(raw.block, false)
