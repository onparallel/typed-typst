// Typst 0.15.1 test suite: tests/suite/math/frac.typ, case math-frac-styles-inline.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test inline layout of styled fractions
#set math.frac(style: "horizontal")
$a/(b+c), frac(a, b+c, style: "skewed"), frac(a, b+c, style: "vertical")$
