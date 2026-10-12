// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-basic-with-footer.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  grid.header([a]),
  grid.header(level: 2, [b]),
  [c],
  grid.footer([d])
)
