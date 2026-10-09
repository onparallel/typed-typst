// Typst 0.15.1 test suite: tests/suite/model/outline.typ, case outline-indent-auto.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set heading(numbering: "I.i.")
#set page(width: 150pt)
#show heading: none

#context test(outline.indent, auto)
#outline()

= A
== B
== C
== D
=== Title that breaks across lines
= E
== F
=== Aligned
