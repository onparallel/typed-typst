// Typst 0.15.1 test suite: tests/suite/model/terms.typ, case terms-built-in-loop.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test joining.
#for word in lorem(4).split().map(s => s.trim(".")) [
  / #word: Latin stuff.
]
