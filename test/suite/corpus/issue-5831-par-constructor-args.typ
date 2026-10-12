// Typst 0.15.1 test suite: tests/suite/model/par.typ, case issue-5831-par-constructor-args.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Make sure that all arguments are also respected in the constructor.
A
#par(
  leading: 2pt,
  spacing: 20pt,
  justify: true,
  linebreaks: "simple",
  first-line-indent: (amount: 1em, all: true),
  hanging-indent: 5pt,
)[
  The par function has a constructor and justification.
]
