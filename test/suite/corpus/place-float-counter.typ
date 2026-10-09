// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-counter.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let c = counter("c")
#let cd = context c.display()

#set page(
  height: 100pt,
  margin: (y: 20pt),
  header: [H: #cd],
  footer: [F: #cd],
  columns: 2,
)

#let t(align, scope: "column", n) = place(
  align,
  float: true,
  scope: scope,
  clearance: 10pt,
  line(length: 100%) + c.update(n),
)

#t(bottom, 6)
#cd
#t(top, 3)
#colbreak()
#cd
#t(scope: "parent", bottom, 11)
#colbreak()
#cd
#t(top, 12)
