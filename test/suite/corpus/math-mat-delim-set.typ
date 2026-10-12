// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-delim-set, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test alternative delimiter with set rule.
#set math.mat(delim: "[")
$ mat(1, 2; 3, 4) $
$ a + mat(delim: #none, 1, 2; 3, 4) + b $
