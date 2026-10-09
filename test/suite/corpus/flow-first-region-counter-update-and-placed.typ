// Typst 0.15.1 test suite: tests/suite/layout/flow/invisibles.typ, case flow-first-region-counter-update-and-placed.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Counter update and placed item in the first region.
#set page(height: 5cm, margin: 1cm)
Counter update + place.
#block(breakable: true, above: 1cm, stroke: 1pt, inset: 0.5cm)[
  #counter("dummy").step()
  #place(dx: -0.5cm, dy: -0.75cm, box([OOF]))
  #rect(height: 2cm, fill: gray)
]
