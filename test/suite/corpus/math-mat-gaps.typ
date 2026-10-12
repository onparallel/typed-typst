// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-gaps, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set math.mat(row-gap: 1em, column-gap: 2em)
$ mat(1, 2; 3, 4) $
$ mat(column-gap: #1em, 1, 2; 3, 4)
  mat(row-gap: #2em, 1, 2; 3, 4) $
