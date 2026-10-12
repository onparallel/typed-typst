// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-regex-character-class.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// This is a fun one.
#set par(justify: true)
#show regex("\\S"): letter => box(stroke: 1pt, inset: 2pt, upper(letter))
#lorem(5)
