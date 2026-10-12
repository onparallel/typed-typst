// Typst 0.15.1 test suite: tests/suite/foundations/std.typ, case std-of-shadowed, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let my-grid = grid[a][b]
#let grid = "oh no!"
#test(my-grid.func(), std.grid)
