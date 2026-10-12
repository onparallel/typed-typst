// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case pagebreak-weak-place.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// After place
// Should result in three pages.
First
#pagebreak(weak: true)
#place(right)[placed A]
#pagebreak(weak: true)
Third
