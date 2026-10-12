// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-sizing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test block sizing.
#set page(height: 120pt)
#set block(spacing: 0pt)
#block(width: 90pt, height: 80pt, fill: red)[
  #block(width: 60%, height: 60%, fill: green)
  #block(width: 50%, height: 60%, fill: blue)
]
