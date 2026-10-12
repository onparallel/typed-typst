// Typst 0.15.1 test suite: tests/suite/layout/repeat.typ, case repeat-no-justify-align.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test repeat with alignment and disabled justification.
#set repeat(justify: false)
#set align(right)
A#box(width: 1fr, repeat(rect(width: 2em, height: 1em), gap: 1em))B
