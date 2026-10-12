// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-linebreaking-after-relation-without-space.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Line breaks can happen after a relation even if there is no
// explicit space.
#let hrule(x) = box(line(length: x))
#hrule(90pt)$<;$\
#hrule(95pt)$<;$\
// We don't linebreak before a closing paren, but do before an opening paren.
#hrule(90pt)$<($\
#hrule(95pt)$<($
#hrule(90pt)$<)$\
#hrule(95pt)$<)$
