// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-linebreaking-in-box.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Inline, in a box, doesn't linebreak.
#let hrule(x) = box(line(length: x))
#hrule(80pt)#box($a+b$)
