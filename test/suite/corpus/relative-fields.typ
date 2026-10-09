// Typst 0.15.1 test suite: tests/suite/layout/relative.typ, case relative-fields, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test relative length fields.
#test((100% + 2em + 2pt).ratio, 100%)
#test((100% + 2em + 2pt).length, 2em + 2pt)
#test((100% + 2pt).length, 2pt)
#test((100% + 2pt - 2pt).length, 0pt)
#test((56% + 2pt - 56%).ratio, 0%)
