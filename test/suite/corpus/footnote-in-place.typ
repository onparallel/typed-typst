// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-in-place.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
A
#place(top + right, footnote[A])
#figure(
  placement: bottom,
  caption: footnote[B],
  rect(),
)
