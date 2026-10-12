// Typst 0.15.1 test suite: tests/suite/foundations/arguments.typ, case arguments-len, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(arguments().len(), 0)
#test(arguments("hello").len(), 1)
#test(arguments(a: "world").len(), 1)
#test(arguments(a: "hey", 14).len(), 2)
#test(arguments(0, 1, a: 2, 3).len(), 4)
