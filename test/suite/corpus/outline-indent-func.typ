// Typst 0.15.1 test suite: tests/suite/model/outline.typ, case outline-indent-func.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set heading(numbering: "1.a.")
#show heading: none

#outline(indent: n => (0pt, 1em, 2.5em, 3em).at(n))

= A
== B
=== C
==== Title breaks
#set heading(numbering: none)
== E
= F
