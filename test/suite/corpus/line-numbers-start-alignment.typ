// Typst 0.15.1 test suite: tests/suite/layout/line-numbers.typ, case line-numbers-start-alignment.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: (left: 3em))
#set par.line(numbering: "i", number-align: start)
a \
a
#pagebreak()
a \
a \
a
