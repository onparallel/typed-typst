// Typst 0.15.1 test suite: tests/suite/model/heading.typ, case heading-offset, attributes: paged pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test setting the starting offset.
#set heading(numbering: "1.1")
#show heading.where(level: 2): set text(blue)
= Level 1

#heading(depth: 1)[We're twins]
#heading(level: 1)[We're twins]

== Real level 2

#set heading(offset: 1)
= Fake level 2
== Fake level 3
