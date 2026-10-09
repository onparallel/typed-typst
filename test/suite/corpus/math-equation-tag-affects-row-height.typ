// Typst 0.15.1 test suite: tests/suite/math/equation.typ, case math-equation-tag-affects-row-height.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Tags should not affect the row height of equations.
#set stack(dir: ltr, spacing: 0.5em)
#stack(
  box($ - - $, fill: silver),
  box($ #metadata(none) - - $, fill: silver),
)

#stack(
  box($ a \ - - $, fill: silver),
  box($ a \ #metadata(none) - - $, fill: silver),
  box($ - - \ a $, fill: silver),
  box($ #metadata(none) - - \ a $, fill: silver),
)
