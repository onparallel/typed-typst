// Typst 0.15.1 test suite: tests/suite/layout/line-numbers.typ, case line-numbers-rtl.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: (right: 3em))
#set text(dir: rtl)
#set par.line(numbering: "1")
a
#([\ a] * 15)
