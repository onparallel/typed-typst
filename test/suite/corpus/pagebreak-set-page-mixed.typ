// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case pagebreak-set-page-mixed.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test a combination of pagebreaks, styled pages and pages with bodies.
// Should result in three five pages, with the fourth one being forest-colored.
#set page(width: 80pt, height: 30pt)
#[#set page(width: 60pt); First]
#pagebreak()
#pagebreak()
Third
#page(height: 20pt, fill: forest)[]
Fif#[#set page();th]
