// Typst 0.15.1 test suite: tests/suite/foundations/calc.typ, case calc-round-smaller-than-min-int, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(calc.round(decimal("-9223372036854775809.5")), decimal("-9223372036854775810"))
#test(calc.round(-9223372036854775809.5), -9223372036854775810.0)
