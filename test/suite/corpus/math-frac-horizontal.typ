// Typst 0.15.1 test suite: tests/suite/math/frac.typ, case math-frac-horizontal, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that horizontal fractions look identical to inline math with `slash`
#set math.frac(style: "horizontal")
$ (a / b) / (c / (d / e)) $
$ (a slash b) slash (c slash (d slash e)) $
