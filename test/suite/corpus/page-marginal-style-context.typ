// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-marginal-style-context.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(numbering: "1", margin: (bottom: 20pt))
#show: it => context {
  set text(red)
  it
}
Hi
