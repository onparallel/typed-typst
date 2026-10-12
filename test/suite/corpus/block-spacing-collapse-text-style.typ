// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-spacing-collapse-text-style.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test spacing collapsing with different font sizes.
#grid(columns: 2)[
  #text(size: 12pt, block(below: 1em)[A])
  #text(size: 8pt, block(above: 1em)[B])
][
  #text(size: 12pt, block(below: 1em)[A])
  #text(size: 8pt, block(above: 1.25em)[B])
]
