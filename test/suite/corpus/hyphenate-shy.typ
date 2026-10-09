// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case hyphenate-shy.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test shy hyphens.
#set text(lang: "de", hyphenate: true)
#grid(
  columns: 2 * (20pt,),
  gutter: 20pt,
  [Barankauf],
  [Bar-?ankauf],
)
