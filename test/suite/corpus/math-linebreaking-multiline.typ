// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-linebreaking-multiline.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Multiline yet inline does not linebreak
#let hrule(x) = box(line(length: x))
#hrule(80pt)$a + b \ c + d$\
