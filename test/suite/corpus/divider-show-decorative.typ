// Typst 0.15.1 test suite: tests/suite/model/divider.typ, case divider-show-decorative.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test replacing with custom content (asterism).
#set page(width: 200pt)
#show divider: set align(center)
#show divider: block[∗ ∗ ∗]
Chapter 1
#divider()
Chapter 2
