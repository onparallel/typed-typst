// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case figure-caption-where-selector.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test figure.caption element for specific figure kinds
#show figure.caption.where(kind: table): underline

#figure(
  [Not a table],
  caption: [Not underlined],
)

#figure(
  table[A table],
  caption: [Underlined],
)
