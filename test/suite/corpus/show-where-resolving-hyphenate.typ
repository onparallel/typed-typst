// Typst 0.15.1 test suite: tests/suite/styling/show-where.typ, case show-where-resolving-hyphenate.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test again that resolving is *not* taken into account.
#set text(hyphenate: auto)

#[
  #show text.where(hyphenate: auto): underline
  Auto
]
#[
  #show text.where(hyphenate: true): underline
  True
]
#[
  #show text.where(hyphenate: false): underline
  False
]
