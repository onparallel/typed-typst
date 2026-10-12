// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case grid-auto-shrink.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test iterative auto column shrinking.
#set page(width: 210mm - 2 * 2.5cm + 2 * 10pt)
#set text(11pt)
#table(
  columns: 4,
  [Hello!],
  [Hello there, my friend!],
  [Hello there, my friends! Hi!],
  [Hello there, my friends! Hi! What is going on right now?],
)
