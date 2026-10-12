// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case figure-caption-show.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test figure.caption element
#show figure.caption: emph

#figure(
  [Not italicized],
  caption: [Italicized],
)
