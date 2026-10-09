// Typst 0.15.1 test suite: tests/suite/model/outline.typ, case outline-entry-inner.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set heading(numbering: "1.")
#show outline.entry: it => block(it.inner())
#show heading: none

#set outline.entry(fill: repeat[ -- ])
#outline()

= A
= B
