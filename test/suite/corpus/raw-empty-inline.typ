// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-empty-inline, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let raw = ``
#test(raw.text, "")
#test(raw.block, false)
