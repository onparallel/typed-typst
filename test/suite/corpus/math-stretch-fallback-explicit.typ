// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-fallback-explicit.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stretching fallback when features are applied.
#show math.equation: set text(font: "STIX Two Math")
$ sscript(sqrt(a / b) quad (c / d)) $
