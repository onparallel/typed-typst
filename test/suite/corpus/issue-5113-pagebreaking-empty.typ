// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case issue-5113-pagebreaking-empty, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test empty breakable equations.
#show math.equation: set block(breakable: true)
#math.equation(block: true, [])
