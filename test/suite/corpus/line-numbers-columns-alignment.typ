// Typst 0.15.1 test suite: tests/suite/layout/line-numbers.typ, case line-numbers-columns-alignment.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(columns: 2, margin: (x: 1.5em))
#set par.line(numbering: "i", number-clearance: 0.5em)

Hello \
Beautiful \
World
#colbreak()
Birds \
In the \
Sky
