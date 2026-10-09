// Typst 0.15.1 test suite: tests/suite/layout/repeat.typ, case repeat-no-justify.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test repeat with disabled justification.
#set repeat(justify: false)
A#box(width: 1fr, repeat(rect(width: 2em, height: 1em), gap: 1em))B
