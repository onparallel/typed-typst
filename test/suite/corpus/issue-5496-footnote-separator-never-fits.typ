// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case issue-5496-footnote-separator-never-fits.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether an overlarge footnote separator does not cause an infinite
// loop and compiles.
#set page(height: 2em)
#set footnote.entry(separator: v(5em))

#footnote[]
