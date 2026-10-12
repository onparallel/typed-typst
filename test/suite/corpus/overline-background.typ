// Typst 0.15.1 test suite: tests/suite/text/deco.typ, case overline-background.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test overline background
#set overline(background: true, stroke: (thickness: 0.5em, paint: red, cap: "round"))
#overline[This is in the background]
