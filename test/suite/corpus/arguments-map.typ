// Typst 0.15.1 test suite: tests/suite/foundations/arguments.typ, case arguments-map, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `map` method.
#test(arguments().map(x => x * 2), arguments())
#test(arguments(2, a: 3).map(x => x * 2), arguments(4, a: 6))
