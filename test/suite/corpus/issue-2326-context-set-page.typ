// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case issue-2326-context-set-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#context [
  #set page(fill: aqua)
  On page #here().page()
]
