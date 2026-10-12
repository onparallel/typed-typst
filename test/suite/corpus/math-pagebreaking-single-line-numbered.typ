// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-pagebreaking-single-line-numbered.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test breaking of single line equations with numbering.
#set page(height: 4em)
#show math.equation: set block(breakable: true)
#set math.equation(numbering: "(1)")

Shouldn't overflow:
$ a + b $
