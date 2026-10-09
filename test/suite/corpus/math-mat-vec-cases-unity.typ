// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-vec-cases-unity, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that matrices, vectors, and cases are all laid out the same.
$ mat(z_(n_p); a^2)
  vec(z_(n_p), a^2)
  cases(reverse: #true, delim: \(, z_(n_p), a^2)
  cases(delim: \(, z_(n_p), a^2) $
