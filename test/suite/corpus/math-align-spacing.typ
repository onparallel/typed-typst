// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-align-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test how spacing is inserted around alignment points.
#set page(width: auto)
#grid(
  columns: 2,
  stroke: 1pt,
  inset: 1em,
  $
    a & + b + & c \
    a & + b   &   & e & + d \
    a & + b + & c & e & + d \
      &       & c &   & + d \
      & = 0
  $,
  $
    a & + b + & c \
    a & + b   &   & e & + d \
    a & + b + & c &   & + d \
      &       & c & e & + d \
      & = 0
  $,

  $
    a & + b + & c \
    a & + b   &   &   & + d \
    a & + b + & c & e & + d \
      &       & c & e & + d \
      & = 0
  $,
  $
    a & + b + & c \
    a & + b   &   & e & + d \
    a & + b + & c & e & + d \
      &       & c & e & + d \
      & = 0
  $,
)
