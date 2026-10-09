// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-marginal-style-show-rule-with-set-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show heading: it => {
  set page(numbering: "1", margin: (bottom: 20pt))
  it
}

= Introduction
