// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-fill.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test page fill.
#set page(width: 80pt, height: 40pt, fill: eastern)
#text(15pt, font: "Roboto", fill: white, smallcaps[Typst])
#page(width: 40pt, fill: auto, margin: (top: 10pt, rest: auto))[Hi]
