// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case pagebreak-to-auto-sized.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto, height: auto)

// Test with auto-sized page.
First
#pagebreak(to: "odd")
Third
