// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-no-stretch-fallback.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that stretching fallback doesn't happen if the original size suffices.
#show math.equation: set text(font: "STIX Two Math")
$ script(sqrt(x) (a)) $
