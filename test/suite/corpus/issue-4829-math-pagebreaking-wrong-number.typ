// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case issue-4829-math-pagebreaking-wrong-number.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test numbering of empty regions of broken equations.
#set page(height: 5em)
#set math.equation(numbering: "1")
#show math.equation: set block(breakable: true)

#rect(height: 1.5em)

$ a + b \
  a + b $
