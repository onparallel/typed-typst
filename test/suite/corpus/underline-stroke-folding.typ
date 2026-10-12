// Typst 0.15.1 test suite: tests/suite/text/deco.typ, case underline-stroke-folding.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stroke folding.
#set underline(stroke: 2pt, offset: 2pt)
#underline(text(red, [DANGER!]))
