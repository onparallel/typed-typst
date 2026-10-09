// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case issue-5496-footnote-in-float-never-fits.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether an overlarge footnote in a float also does not cause an
// infinite loop.
#set page(width: 20pt, height: 20pt)

#place(
  top,
  float: true,
  footnote(text(size: 15pt)[a] * 100)
)
