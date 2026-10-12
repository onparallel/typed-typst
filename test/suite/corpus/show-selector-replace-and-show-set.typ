// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-selector-replace-and-show-set.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test full reset.
#show heading: [B]
#show heading: set text(size: 10pt, weight: 400)
A #[= Heading] C
