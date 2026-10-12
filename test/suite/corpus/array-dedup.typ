// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-dedup, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `dedup` method.
#test(().dedup(), ())
#test((1,).dedup(), (1,))
#test((1, 1).dedup(), (1,))
#test((1, 2, 1).dedup(), (1, 2))
#test(("Jane", "John", "Eric").dedup(), ("Jane", "John", "Eric"))
#test(("Jane", "John", "Eric", "John").dedup(), ("Jane", "John", "Eric"))
