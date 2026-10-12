// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-block-overflow.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 7em)
#table(
  columns: 3,
  [], [], table.cell(breakable: true, rowspan: 2, block(width: 2em, height: 100%, fill: red)),
  table.cell(breakable: false, block(width: 2em, height: 100%, fill: red)),
  table.cell(breakable: false, rowspan: 2, block(width: 2em, height: 100%, fill: red)),
)

// Rowspan split tests
