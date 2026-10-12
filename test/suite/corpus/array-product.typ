// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-product, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `product` method.
#test(().product(default: 0), 0)
#test(().product(default: []), [])
#test(([ab], 3).product(), [ab]*3)
#test((1, 2, 3).product(), 6)
