// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-at-call, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test calling a function in a dictionary via `.at()`.
#let dict = (func: x => x + 1)
#test(dict.at("func")(0), 1)
