// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-augment.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test matrix line drawing (augmentation).
#grid(
  columns: 2,
  gutter: 10pt,
  $ mat(10, 2, 3, 4; 5, 6, 7, 8; augment: #3) $,
  $ mat(10, 2, 3, 4; 5, 6, 7, 8; augment: #4) $,
  $ mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(hline: 0)) $,
  $ mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(hline: 2)) $,
  $ mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(hline: 3)) $,
  $ mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(hline: 1, vline: 1)) $,
  $ mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(hline: -1, vline: -1)) $,
  $ mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(vline: 2, stroke: 1pt + blue)) $,
  $ mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(vline: 3, stroke: 1pt + blue)) $,
  $ mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(vline: 3, stroke: 1pt + blue)) $,
  $ mat(100, 2, 3; 4, 5, 6; 7, 8, 9; augment: #(vline: 0, stroke: 1pt + blue)) $,
  $ mat(10, 2, 3, 4; 5, 6, 7, 8; augment: #(vline: -4, stroke: 1pt + blue)) $,
)
