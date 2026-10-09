// Typst 0.15.1 test suite: tests/suite/visualize/square.typ, case square-height-limited.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that square does not overflow page.
#set page(width: 100pt, height: 75pt)
#square(fill: conifer)[
  But, soft! what light through yonder window breaks?
]
