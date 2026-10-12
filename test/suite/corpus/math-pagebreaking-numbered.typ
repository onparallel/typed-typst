// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-pagebreaking-numbered.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test breaking of equations with numbering.
#set page(height: 5em)
#set math.equation(numbering: "1")
#show math.equation: set block(breakable: true)

$ a &+ b + & c \
  a &+ b   &   && + d \
  a &+ b + & c && + d \
    &      & c && + d \
    &= 0 $
