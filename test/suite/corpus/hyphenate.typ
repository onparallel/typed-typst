// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case hyphenate.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test hyphenating english and greek.
#set text(hyphenate: true)
#set page(width: auto)
#grid(
  columns: (50pt, 50pt),
  [Warm welcomes to Typst.],
  text(lang: "el")[διαμερίσματα. \ λατρευτός],
)
