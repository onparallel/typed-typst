// Typst 0.15.1 test suite: tests/suite/layout/columns.typ, case columns-colbreak-after-place.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test colbreak after only out-of-flow elements.
#set page(width: 7.05cm, columns: 2)
#place[OOF]
#colbreak()
In flow.
