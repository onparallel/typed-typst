// Typst 0.15.1 test suite: tests/suite/layout/grid/rtl.typ, case grid-rtl-rowspan-counter-equal.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test interaction between RTL and counters
#set text(dir: rtl)
#let test = counter("test")
#grid(
  columns: (1fr, 1fr),
  inset: 5pt,
  align: center,
  grid.cell(rowspan: 2, [
    a: // should produce 1
    #test.step()
    #context test.get().first()
  ]),
  grid.cell(rowspan: 2, [
    b: // should produce 2
    #test.step()
    #context test.get().first()
  ]),
)
