// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-lang--multi-space, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The language tag only discards one space.
#let raw = ```lang  test```
#test(raw.lang, "lang")
#test(raw.text, " test")
#test(raw.block, false)
