// Typst 0.15.1 test suite: tests/suite/layout/inline/text.typ, case text-features.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test raw features array or dictionary.
#text(features: ("smcp",))[Smcp] \
fi vs. #text(features: (liga: 0))[No fi]
