// Typst 0.15.1 test suite: tests/suite/layout/measure.typ, case measure, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test `measure`.
#let f(lo, hi) = context {
  let h = measure[Hello].height
  assert(h > lo)
  assert(h < hi)
}
#text(10pt, f(6pt, 8pt))
#text(20pt, f(13pt, 14pt))
