// Typst 0.15.1 test suite: tests/suite/model/outline.typ, case outline-spacing, attributes: paged pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set heading(numbering: "1.a.")
#set outline.entry(fill: none)
#show outline.entry.where(level: 1): set block(above: 1.2em)

#outline()

#show heading: none
= A
== B
== C
= D
== E
