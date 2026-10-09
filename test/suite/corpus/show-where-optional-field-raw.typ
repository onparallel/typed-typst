// Typst 0.15.1 test suite: tests/suite/styling/show-where.typ, case show-where-optional-field-raw.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that where selectors also trigger on set rule fields.
#show raw.where(block: false): box.with(
  fill: luma(220),
  inset: (x: 3pt, y: 0pt),
  outset: (y: 3pt),
  radius: 2pt,
)

This is #raw("fn main() {}") some text.
