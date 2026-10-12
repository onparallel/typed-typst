// Typst 0.15.1 test suite: tests/suite/model/outline.typ, case outline-indent-auto-mixed-prefix.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show heading: none
#show outline.entry.where(level: 1): strong

#outline()

#set heading(numbering: "I.i.")
= A
== B
=== Title that breaks
= C
== D
= E
#[
  #set heading(numbering: none)
  = F
  == Numberless title that breaks
  === G
]
= H
