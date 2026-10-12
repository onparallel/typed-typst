// Typst 0.15.1 test suite: tests/suite/layout/measure.typ, case measure-given-area, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test `measure` given an area.
#let text = lorem(100)

#context {
  let d1 = measure(text)
  assert(d1.width > 2000pt)
  assert(d1.height < 10pt)
  let d2 = measure(width: 400pt, height: auto, text)
  assert(d2.width < 400pt)
  assert(d2.height > 50pt)
}
