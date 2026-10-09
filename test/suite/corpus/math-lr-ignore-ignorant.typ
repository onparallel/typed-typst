// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-ignore-ignorant, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test ignoring leading and trailing ignorant fragments.
#box($ (1 / 2) $)
#box({
  show "(": it => context it
  $ (1 / 2) $
})
#box({
  show ")": it => context it
  $ (1 / 2) $
})
#box({
  show "(": it => context it
  show ")": it => context it
  $ (1 / 2) $
})
