// Typst 0.15.1 test suite: tests/suite/model/outline.typ, case outline-indent-zero.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set heading(numbering: "1.a.")
#show heading: none

#outline(indent: 0pt)

= A
== B
=== C
==== Title that breaks across lines
#set heading(numbering: none)
== E
= F
