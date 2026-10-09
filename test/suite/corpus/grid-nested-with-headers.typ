// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case grid-nested-with-headers.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Nested table with header should repeat both headers
#set page(height: 10em)
#table(
  table.header(
    [a]
  ),
  table(
    table.header(
      [b]
    ),
    [a\ b\ c\ d]
  )
)
