// Typst 0.15.1 test suite: tests/suite/layout/columns.typ, case columns-page-height-auto.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test columns in an infinitely high frame.
#set page(width: 7.05cm, columns: 2)

There can be as much content as you want in the left column
and the document will grow with it.

#rect(fill: conifer, width: 100%, height: 30pt)

Only an explicit #colbreak() `#colbreak()` can put content in the
second column.
