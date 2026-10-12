// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case pagebreak-weak-meta.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// After only ignorables & invisibles
// Should result in two pages.
First
#pagebreak(weak: true)
#counter(page).update(1)
#metadata("Some")
#pagebreak(weak: true)
Second
