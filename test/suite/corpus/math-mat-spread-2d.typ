// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-spread-2d.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let nums = range(0, 2).map(i => (i, i+1))
$ mat(..nums, delim: "|",)
  mat(..nums; delim: "|",) $
$ mat(..nums) mat(..nums;) \
  mat(..nums;,) mat(..nums,) $
