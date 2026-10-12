// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-linebreaking-trailing-linebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// A single linebreak at the end still counts as one line.
#let hrule(x) = box(line(length: x))
#hrule(60pt)$e^(pi i)+1 = 0\ $
