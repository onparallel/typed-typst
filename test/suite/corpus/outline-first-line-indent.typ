// Typst 0.15.1 test suite: tests/suite/model/outline.typ, case outline-first-line-indent.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set par(first-line-indent: 1.5em)
#set heading(numbering: "1.1.a.")
#show outline.entry.where(level: 1): strong

#outline()

#show heading: none
= Introduction
= Background
== History
== State of the Art
= Analysis
== Setup
