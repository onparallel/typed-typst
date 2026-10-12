// Typst 0.15.1 test suite: tests/suite/model/outline.typ, case issue-2048-outline-multiline.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Without the word joiner between the dots and the page number,
// the page number would be alone in its line.
#set page(width: 125pt)
#set heading(numbering: "1.a.")
#show heading: none

#outline()

= A
== This just fits here
