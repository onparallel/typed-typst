// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-spread.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test argument spreading in matrix.
$ mat(..#range(1, 5).chunks(2))
  mat(#(..range(2).map(_ => range(2)))) $

#let nums = ((1,) * 5).intersperse(0).chunks(3)
$ mat(..nums, delim: "[") $
