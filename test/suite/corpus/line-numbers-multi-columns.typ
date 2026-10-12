// Typst 0.15.1 test suite: tests/suite/layout/line-numbers.typ, case line-numbers-multi-columns.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(columns: 3, margin: (x: 1.5em))
#set par.line(numbering: "1", number-clearance: 0.5em)

A \
B \
C
#colbreak()
D \
E \
F
#colbreak()
G \
H \
I
