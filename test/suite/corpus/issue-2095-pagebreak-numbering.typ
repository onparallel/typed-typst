// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case issue-2095-pagebreak-numbering.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The empty page 2 should not have a page number
#set page(numbering: none)
This and next page should not be numbered

#pagebreak(weak: true, to: "odd")

#set page(numbering: "1")
#counter(page).update(1)

This page should
