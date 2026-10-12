// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-pagebreaking-single-line.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test breaking of single line equations.
#set page(height: 4em)
#show math.equation: set block(breakable: true)

Shouldn't overflow:
$ a + b $
