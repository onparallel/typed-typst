// Typst 0.15.1 test suite: tests/suite/layout/grid/rowspan.typ, case grid-rowspan-unbreakable-1.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
    columns: 3,
    rows: (auto, auto, auto, 2em),
    gutter: 3pt,
    table.cell(rowspan: 4)[a \ b\ c\ d\ e], [c], [d],
    [e], table.cell(breakable: false, rowspan: 2)[f],
    [g]
)
