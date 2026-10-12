// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-linebreaking-after-binop-and-rel.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Basic breaking after binop, rel
#let hrule(x) = box(line(length: x))
#hrule(45pt)$e^(pi i)+1 = 0$\
#hrule(55pt)$e^(pi i)+1 = 0$\
#hrule(70pt)$e^(pi i)+1 = 0$
