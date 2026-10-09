// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case pagebreak-meta.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// After only ignorables, but regular break
// Should result in three pages.
First
#pagebreak()
#counter(page).update(1)
#metadata("Some")
#pagebreak()
Third
