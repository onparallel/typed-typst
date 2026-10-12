// Typst 0.15.1 test suite: tests/suite/layout/repeat.typ, case repeat-align-and-dir.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test single repeat in both directions.
A#box(width: 1fr, repeat(rect(width: 6em, height: 0.7em)))B

#set align(center)
A#box(width: 1fr, repeat(rect(width: 6em, height: 0.7em)))B

#set text(dir: rtl, font: "Noto Sans Arabic")
ريجين#box(width: 1fr, repeat(rect(width: 4em, height: 0.7em)))سون
