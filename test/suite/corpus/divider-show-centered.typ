// Typst 0.15.1 test suite: tests/suite/model/divider.typ, case divider-show-centered.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test centered, shorter divider.
#set page(width: 200pt)
#show divider: block(
  width: 100%,
  spacing: 1em,
  align(center, line(length: 50%)),
)
Before
#divider()
After
