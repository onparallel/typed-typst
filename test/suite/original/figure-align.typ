// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case figure-align.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show figure: set align(start)
#figure(
  rect[This is \ left],
  caption: [Start-aligned]
)
