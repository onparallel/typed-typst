// Typst 0.15.1 test suite: tests/suite/math/equation.typ, case issue-4187-alignment-point-affects-row-height.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// In this bug, a row of "-" only should have a very small height; but
// after adding an alignment point "&", the row gains a larger height.
// We need to test alignment point "&" does not affect a row's height.
#set stack(dir: ltr, spacing: 0.5em)
#stack(
  box($ - - $, fill: silver),
  box($ - - $, fill: silver)
)

#stack(
  box($ a \ - - $, fill: silver),
  box($ &- - \ &a $, fill: silver),
  box($ &a \ &- - $, fill: silver)
)
