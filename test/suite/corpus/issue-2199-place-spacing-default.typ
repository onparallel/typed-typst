// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case issue-2199-place-spacing-default.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show place: set block(spacing: 4em)

Paragraph before place.
#place(rect())
Paragraph after place.
