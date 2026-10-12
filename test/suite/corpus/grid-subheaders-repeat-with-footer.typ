// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-repeat-with-footer.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em)
#grid(
  grid.header([a]),
  [m],
  grid.header(level: 2, [b]),
  ..([c],) * 10,
  grid.footer([f])
)
