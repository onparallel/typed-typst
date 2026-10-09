// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case issue-2841-pagebreak-to-weak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
First
#pagebreak(to: "odd")
#pagebreak(weak: true)
Odd
