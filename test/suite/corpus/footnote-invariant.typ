// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-invariant.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that a footnote and the first line of its entry
// always end up on the same page.
#set page(height: 120pt)

#lines(5)

A #footnote(lines(6, "1"))
