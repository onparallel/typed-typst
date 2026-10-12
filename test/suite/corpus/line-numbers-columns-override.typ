// Typst 0.15.1 test suite: tests/suite/layout/line-numbers.typ, case line-numbers-columns-override.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set columns(gutter: 1.5em)
#set page(columns: 2, margin: (x: 1.5em))
#set par.line(numbering: "1", number-margin: end, number-clearance: 0.5em)

Hello \
Beautiful \
World
#colbreak()
Birds \
In the \
Sky
