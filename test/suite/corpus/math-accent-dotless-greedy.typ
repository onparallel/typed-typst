// Typst 0.15.1 test suite: tests/suite/math/accent.typ, case math-accent-dotless-greedy, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Currently the dotless style propagates to everything in the accent's base,
// even though it shouldn't.
$ arrow(P_(c, i dot j) P_(1, i) j) \
  arrow(P_(c, i dot j) P_(1, i) j, dotless: #false) $
