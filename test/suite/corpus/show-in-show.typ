// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-in-show.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test set and show in code blocks.
#show heading: it => {
  set text(red)
  show "ding": [🛎]
  it.body
}

= Heading
