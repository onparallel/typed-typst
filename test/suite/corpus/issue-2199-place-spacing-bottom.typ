// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case issue-2199-place-spacing-bottom.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that placed elements don't add extra block spacing.
#show figure: set block(spacing: 4em)

Paragraph before float.
#figure(rect(), placement: bottom)
Paragraph after float.
