// Typst 0.15.1 test suite: tests/suite/math/symbols.typ, case math-symbol-double, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let sym = symbol("s", ("test.basic", "s"))
#test($sym.test.basic$, $s$)
