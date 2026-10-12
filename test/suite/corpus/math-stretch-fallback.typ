// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-fallback.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that stretching works in fonts with ssty variants.
#show math.equation: set text(font: "STIX Two Math")
$ lr(a / b|)_sqrt(c / d) $
$ integral_(-oo)^oo e^(-(m omega)/(2 planck) (x^2 + (2 i p)/(m omega) x)) dif x $
