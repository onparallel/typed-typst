// Typst 0.15.1 test suite: tests/suite/layout/table.typ, case table-header-citation.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 60pt)
#table(
  table.header[@netwok],
  [A],
  [A],
)

#show bibliography: none
#bibliography("/assets/bib/works.bib")
