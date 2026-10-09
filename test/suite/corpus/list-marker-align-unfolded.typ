// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-marker-align-unfolded.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Marker align option should not be affected by the context.
#[
  #set align(top)
  #set list(marker-align: horizon)

  - #box(fill: teal, inset: 10pt )[]
]

#[
  #set align(horizon)
  - #box(fill: teal, inset: 10pt)[]
]
