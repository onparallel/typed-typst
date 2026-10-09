// Typst 0.15.1 test suite: tests/suite/math/accent.typ, case math-accent-flattened-fallback, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test falling back from flattened accent glyph variants when stretching.
#show math.equation: set text(font: "STIX Two Math")
$ hat(A, size: #2em) quad hat(A) quad hat(A, size: #200%) \
  grave(I, size: #2em) quad grave(I) quad grave(I, size: #200%) $
