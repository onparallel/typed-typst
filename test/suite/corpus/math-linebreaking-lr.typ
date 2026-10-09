// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-linebreaking-lr.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// LR groups prevent linebreaking.
#let hrule(x) = box(line(length: x))
#hrule(76pt)$a+b$\
#hrule(74pt)$(a+b)$\
#hrule(74pt)$paren.l a+b paren.r$
