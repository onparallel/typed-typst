// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case pagebreak-to-multiple-pages.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 30pt, width: 80pt)

// Test when content extends to more than one page
First

Second

#pagebreak(to: "odd")

Third
