// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case pagebreak-around-set-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Pagebreak, empty with styles and then pagebreak
// Should result in one auto-sized page and two conifer-colored 2cm wide pages.
#pagebreak()
#set page(width: 2cm, fill: conifer)
#pagebreak()
