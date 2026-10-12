// Typst 0.15.1 test suite: tests/suite/styling/set.typ, case set-text-override.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that block spacing and text style are respected from
// the outside, but the more specific fill is respected.
#set par(spacing: 4pt)
#set text(style: "italic", fill: eastern)
#let x = [And the forest #parbreak() lay silent!]
#text(fill: forest, x)
