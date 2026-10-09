// Typst 0.15.1 test suite: tests/suite/model/par.typ, case par-first-line-indent-all-list.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show list.where(tight: false): set list(spacing: 1.2em)
#set par(
  first-line-indent: (amount: 12pt, all: true),
  spacing: 5pt,
  leading: 5pt,
)

- A #parbreak() B #line(length: 100%) C

- D
