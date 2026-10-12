// Typst 0.15.1 test suite: tests/suite/model/par.typ, case par-first-line-indent-all.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set par(
  first-line-indent: (amount: 12pt, all: true),
  spacing: 5pt,
  leading: 5pt,
)
#set block(spacing: 1.2em)
#show heading: set text(size: 10pt)

= Heading
All paragraphs are indented.

Even the first.
