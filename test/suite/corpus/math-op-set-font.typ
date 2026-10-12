// Typst 0.15.1 test suite: tests/suite/math/op.typ, case math-op-set-font, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test setting font.
#show math.equation: set text(weight: "regular")
#let lig = math.op("fi")
#let test = $sech(x) mod_(x -> oo) lig_1(X)$
#test
#show math.op: set text(font: "New Computer Modern")
#test
