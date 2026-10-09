// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-first-and-last, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The `first` and `last` methods.
#test((1,).first(), 1)
#test((2,).last(), 2)
#test((1, 2, 3).first(), 1)
#test((1, 2, 3).last(), 3)
#test((1, 2).first(default: 99), 1)
#test(().first(default: 99), 99)
#test((1, 2).last(default: 99), 2)
#test(().last(default: 99), 99)
