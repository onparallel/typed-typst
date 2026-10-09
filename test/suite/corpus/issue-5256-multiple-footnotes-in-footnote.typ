// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case issue-5256-multiple-footnotes-in-footnote.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether all footnotes inside another footnote are listed.
#footnote[#footnote[A]#footnote[B]#footnote[C]]
