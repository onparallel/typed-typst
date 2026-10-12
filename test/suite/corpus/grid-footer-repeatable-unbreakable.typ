// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case grid-footer-repeatable-unbreakable.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 8em, width: auto)
#table(
  [h],
  table.footer(
    [a],
    [b],
    [c],
  )
)
