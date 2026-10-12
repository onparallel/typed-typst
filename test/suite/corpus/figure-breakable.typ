// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case figure-breakable.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test breakable figures
#set page(height: 6em)
#show figure: set block(breakable: true)

#figure(table[a][b][c][d][e], caption: [A table])
