// Typst 0.15.1 test suite: tests/suite/layout/flow/flow.typ, case issue-3866-block-migration.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 120pt)
#set text(costs: (widow: 0%, orphan: 0%))
#v(50pt)
#columns(2)[
  #lines(6)
  #block(rect(width: 80%, height: 80pt), breakable: false)
  #lines(6)
]
