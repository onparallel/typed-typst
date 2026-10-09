// Typst 0.15.1 test suite: tests/suite/styling/show-where.typ, case show-where-folding-text-size.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that folding is taken into account.
#set text(5pt)
#set text(2em)

#[
  #show text.where(size: 2em): set text(blue)
  2em not blue
]

#[
  #show text.where(size: 10pt): set text(blue)
  10pt blue
]
