// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case issue-footnotes-skip-first-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// In this issue, we would get an empty page at the beginning because footnote
// layout didn't properly check for in_last.
#set page(height: 50pt)
#footnote[A]
#footnote[B]
