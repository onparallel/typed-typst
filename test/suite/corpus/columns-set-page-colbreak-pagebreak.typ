// Typst 0.15.1 test suite: tests/suite/layout/columns.typ, case columns-set-page-colbreak-pagebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `colbreak` and `pagebreak` functions.
#set page(height: 1cm, width: 7.05cm, columns: 2)

A
#colbreak()
#colbreak()
B
#pagebreak()
C
#colbreak()
D
