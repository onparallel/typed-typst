// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case pagebreak-weak-after-set-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Two text bodies separated with and surrounded by weak pagebreaks.
// Should result in two aqua-colored pages.
#set page(fill: aqua)
#pagebreak(weak: true)
First
#pagebreak(weak: true)
Second
#pagebreak(weak: true)
