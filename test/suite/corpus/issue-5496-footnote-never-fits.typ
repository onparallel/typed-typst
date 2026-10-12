// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case issue-5496-footnote-never-fits.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether a footnote which is always too large would cause an infinite
// loop.
#set page(width: 20pt, height: 20pt)
#set footnote.entry(indent: 0pt)

#footnote(text(size: 15pt)[a] * 100)
