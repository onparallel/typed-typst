// Typst 0.15.1 test suite: tests/suite/layout/hide.typ, case hide-table.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
Hidden:
#hide(table(rows: 2, columns: 2)[a][b][c][d])
#table(rows: 2, columns: 2)[a][b][c][d]
