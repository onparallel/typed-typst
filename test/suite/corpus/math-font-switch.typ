// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-font-switch, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test font switch.
#let here = text.with(font: "Noto Sans")
$#here[f] := #here[Hi there]$.
