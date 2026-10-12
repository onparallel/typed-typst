// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case issue-5354-footnote-empty-frame-infinite-loop.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether an empty footnote would cause infinite loop
#show footnote.entry: it => {}
#lorem(3) #footnote[A footnote]
