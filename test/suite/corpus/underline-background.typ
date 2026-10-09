// Typst 0.15.1 test suite: tests/suite/text/deco.typ, case underline-background.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test underline background
#set underline(background: true, stroke: (thickness: 0.5em, paint: red, cap: "round"))
#underline[This is in the background]
