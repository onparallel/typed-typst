// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-marginal-style-show-rule-with-pagebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(numbering: "1", margin: (bottom: 20pt))
#show heading: it => {
  pagebreak(weak: true)
  it
}

= Introduction
