// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case pagebreak-followed-by-page-call.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test hard and weak pagebreak followed by page with body.
// Should result in three navy-colored pages.
#set page(fill: navy)
#set text(fill: white)
First
#pagebreak()
#page[Second]
#pagebreak(weak: true)
#page[Third]
