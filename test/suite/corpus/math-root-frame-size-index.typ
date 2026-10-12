// Typst 0.15.1 test suite: tests/suite/math/root.typ, case math-root-frame-size-index, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test size of final frame when there is an index.
$ a root(, 3)         & a root(., 3) \
  a sqrt(3)           & a root(2, 3) \
  a root(#h(-1em), 3) & a root(123, 3) $
