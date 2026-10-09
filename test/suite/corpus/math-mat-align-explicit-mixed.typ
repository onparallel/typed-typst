// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-align-explicit-mixed, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test explicit alignment in some columns with align parameter in a matrix.
#let data = (
  ($&18&&.02$, $1$, $+1$),
  ($-&9&&.3$, $-1$, $-&21$),
  ($&&&.011$, $1$, $&0$)
)
$ #math.mat(align: left, ..data) $
$ #math.mat(align: center, ..data) $
$ #math.mat(align: right, ..data) $
