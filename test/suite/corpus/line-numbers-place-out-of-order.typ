// Typst 0.15.1 test suite: tests/suite/layout/line-numbers.typ, case line-numbers-place-out-of-order.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: (left: 1.5cm))
#set par.line(numbering: "1", number-clearance: 0.5cm)

#place(bottom)[Line 4]

Line 1\
Line 2\
Line 3
#v(1cm)
