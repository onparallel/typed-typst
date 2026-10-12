// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-extra-first-line-ws, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let raw = eval("```   \n```")
#test(raw.text, "")
#test(raw.block, true)
