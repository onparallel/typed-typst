// Typst 0.15.1 test suite: tests/suite/model/par.typ, case par-first-line-indent-all-terms, attributes: paged pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show terms.where(tight: false): set terms(spacing: 1.2em)
#set terms(hanging-indent: 10pt)
#set par(
  first-line-indent: (amount: 12pt, all: true),
  spacing: 5pt,
  leading: 5pt,
)

/ Term A: B \ C #parbreak() D #line(length: 100%) E

/ Term F: G
