// Typst 0.15.1 test suite: tests/suite/layout/flow/invisibles.typ, case flow-first-region-counter-update-placed-and-line.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Mix-and-match all the previous ones.
#set page(height: 5cm, margin: 1cm)
Mix-and-match all the previous tests.
#block(breakable: true, above: 1cm, stroke: 1pt, inset: 0.5cm)[
  #counter("dummy").step()
  #place(dx: -0.5cm, dy: -0.75cm, box(width: 200%)[OOF])
  #line(length: 100%)
  #place(dy: 0.2em)[OOF]
  #rect(height: 2cm, fill: gray)
]
