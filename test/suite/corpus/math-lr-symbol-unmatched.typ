// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-symbol-unmatched, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that symbols aren't matched automatically.
$ bracket.l a/b bracket.r
  = lr(bracket.l a/b bracket.r) $
