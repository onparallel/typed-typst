// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-augment-set, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test using matrix line drawing with a set rule.
#set math.mat(augment: (hline: 2, vline: 1, stroke: 2pt + green))
$ mat(1, 0, 0, 0; 0, 1, 0, 0; 0, 0, 1, 1) $

#set math.mat(augment: 2)
$ mat(1, 0, 0, 0; 0, 1, 0, 0; 0, 0, 1, 1) $

#set math.mat(augment: none)
