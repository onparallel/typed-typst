// Typst 0.15.1 test suite: tests/suite/layout/inline/linebreak.typ, case linebreak-whitespace-trimming.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that even spaces across multiple layout items are trimmed during
// line breaking.
#block(width: 15pt, box(fill: aqua, underline("A   " + text(fill: blue, " ") + "    B")))
