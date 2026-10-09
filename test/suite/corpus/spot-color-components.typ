// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case spot-color-components, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test spot color components method.
#let pantone = color.spot("PANTONE 2221 C", eastern)
#let tinted = pantone.tint(80%)
#test(tinted.components(), (80%,))
#test(tinted.components(alpha: false), (80%,))
