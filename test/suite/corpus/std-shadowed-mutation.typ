// Typst 0.15.1 test suite: tests/suite/foundations/std.typ, case std-shadowed-mutation, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let std = 10
#(std = 7)
#test(std, 7)
