// Typst 0.15.1 test suite: tests/suite/foundations/int.typ, case int-min, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(int.min, -1 - int.max)
#test(int.min, int("-9223372036854775808"))
