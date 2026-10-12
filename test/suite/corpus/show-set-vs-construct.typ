// Typst 0.15.1 test suite: tests/suite/styling/set.typ, case show-set-vs-construct.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The constructor property should still work
// when there are recursive show rules.
#show enum: set text(blue)
#enum(numbering: "(a)", [A], enum[B])
