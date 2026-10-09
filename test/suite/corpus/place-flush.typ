// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-flush.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 120pt)
#let floater(align, height) = place(
  align,
  float: true,
  rect(width: 100%, height: height),
)

#floater(top, 30pt)
A

#floater(bottom, 50pt)
#place.flush()
B // Should be on the second page.
