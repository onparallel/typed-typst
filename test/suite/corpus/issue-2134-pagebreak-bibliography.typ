// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case issue-2134-pagebreak-bibliography.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test weak pagebreak before bibliography.
#pagebreak(weak: true)
#bibliography("/assets/bib/works.bib")
