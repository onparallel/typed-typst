// Typst 0.15.1 test suite: tests/suite/math/spacing.typ, case math-spacing-set-comprehension, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test spacing for set comprehension.
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}
$ { x in RR | x "is natural" and x < 10 } $
