// Typst 0.15.1 test suite: tests/suite/model/outline.typ, case outline-bookmark.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that `bookmarked` option doesn't affect the outline
#set heading(numbering: "(I)", bookmarked: false)
#set outline.entry(fill: none)
#show heading: none
#outline()

= A
