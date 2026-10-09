// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case issue-4966-figure-float-counter.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let c = context counter(figure.where(kind: image)).display()
#set align(center)

#c

#figure(
  square(c),
  placement: bottom,
  caption: [A]
)

#c

#figure(
  circle(c),
  placement: top,
  caption: [B]
)

#c
