// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-spacing-table.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that paragraph spacing loses against block spacing.
#set block(spacing: 100pt)
#show table: set block(above: 5pt, below: 5pt)
Hello
#table(columns: 4, fill: (x, y) => if calc.odd(x + y) { silver })[A][B][C][D]
