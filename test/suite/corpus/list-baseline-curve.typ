// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-baseline-curve.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let dy = 15pt
- #curve(
    stroke: 5pt,
    curve.move((0pt,  30pt + dy)),
    curve.line((30pt, 30pt + dy)),
    curve.line((15pt, dy)),
    curve.close()
  )
