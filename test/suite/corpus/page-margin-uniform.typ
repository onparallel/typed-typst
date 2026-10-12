// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-margin-uniform.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Set all margins at once.
#[
  #set page(height: 20pt, margin: 5pt)
  #place(top + left)[TL]
  #place(bottom + right)[BR]
]
