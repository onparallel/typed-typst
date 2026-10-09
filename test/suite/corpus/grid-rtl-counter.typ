// Typst 0.15.1 test suite: tests/suite/layout/grid/rtl.typ, case grid-rtl-counter.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test interaction between RTL and counters
#set text(dir: rtl)
#let test = counter("test")
#grid(
  columns: (1fr, 1fr),
  inset: 5pt,
  align: center,
  [
    a: // should produce 1
    #test.step()
    #context test.get().first()
  ],
  [
    b: // should produce 2
    #test.step()
    #context test.get().first()
  ],
)
