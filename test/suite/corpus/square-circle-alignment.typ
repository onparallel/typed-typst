// Typst 0.15.1 test suite: tests/suite/visualize/square.typ, case square-circle-alignment.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test alignment in automatically sized square and circle.
#set text(8pt)
#stack(
  dir: ltr,
  spacing: 0.5em,
  square(inset: 4pt)[
    Hey there, #align(center + bottom, rotate(180deg, [you!]))
  ],
  circle(align(center + horizon, [Hey.]))
)
