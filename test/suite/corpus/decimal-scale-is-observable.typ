// Typst 0.15.1 test suite: tests/suite/foundations/decimal.typ, case decimal-scale-is-observable, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure equal decimals with different scales produce different strings.
#let f1(x) = str(x)
#let f2(x) = f1(x)
#test(f2(decimal("3.140")), "3.140")
#test(f2(decimal("3.14000")), "3.14000")
