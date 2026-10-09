// Typst 0.15.1 test suite: tests/suite/math/alignment.typ, case issue-3973-math-equation-align, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// In this bug, the alignment set with "show math.equation: set align(...)"
// overrides the left-right alternating behavior of alignment points.
#let equations = [
$ a + b &= c \
      e &= f + g + h $
$         a &= b + c \
  e + f + g &= h $
]
#equations

#show math.equation: set align(start)
#equations

#show math.equation: set align(end)
#equations
