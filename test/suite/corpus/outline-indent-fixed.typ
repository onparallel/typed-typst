// Typst 0.15.1 test suite: tests/suite/model/outline.typ, case outline-indent-fixed.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set heading(numbering: "1.a.")
#show heading: none

#outline(indent: 1em)

= A
== B
=== C
==== Title that breaks
#set heading(numbering: none)
== E
= F
