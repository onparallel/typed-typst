// Typst 0.15.1 test suite: tests/suite/styling/show-set.typ, case show-set-on-same-element.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test show-set rule on the same element.
#set figure(supplement: [Default])
#show figure.where(kind: table): set figure(supplement: [Tableau])
#figure(
  table(columns: 2)[A][B][C][D],
  caption: [Four letters],
)
