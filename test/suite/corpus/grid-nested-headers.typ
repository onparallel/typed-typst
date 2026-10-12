// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-nested-headers.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 12em)
#table(
  table.header(
    table(
      table.header(
        [b]
      ),
      [c],
      [d]
    )
  ),
  [a\ b]
)
