// Typst 0.15.1 test suite: tests/suite/visualize/square.typ, case square-relative-size.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test relative width and height and size that is smaller
// than default size.
#set page(width: 120pt, height: 70pt)
#set align(bottom)
#let centered = align.with(center + horizon)
#stack(
  dir: ltr,
  spacing: 1fr,
  square(width: 50%, centered[A]),
  square(height: 50%),
  stack(
    square(size: 10pt),
    square(size: 20pt, centered[B])
  ),
)
