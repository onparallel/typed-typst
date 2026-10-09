// Typst 0.15.1 test suite: tests/suite/model/outline.typ, case issue-4859-outline-entry-show-set.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set heading(numbering: "1.a.")
#show outline.entry.where(level: 1): set outline.entry(fill: none)
#show heading: none

#outline()

= A
== B
