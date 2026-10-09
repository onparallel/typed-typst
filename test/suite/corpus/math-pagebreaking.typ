// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-pagebreaking.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test breaking of equations at page boundaries.
#set page(height: 5em)
#show math.equation: set block(breakable: true)

$ a &+ b + & c \
  a &+ b   &   && + d \
  a &+ b + & c && + d \
    &      & c && + d \
    &= 0 $
