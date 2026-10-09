// Typst 0.15.1 test suite: tests/suite/layout/grid/subheaders.typ, case grid-subheaders-alone-with-footer.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  table.header([a]),
  table.header(level: 2, [b]),
  table.footer([c])
)
