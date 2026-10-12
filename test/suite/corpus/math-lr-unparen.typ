// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-unparen, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that unparen with brackets stays as an LrElem.
#let item = $limits(sum)_i$
$
  1 / ([item]) quad
  1 /  [item]
$
