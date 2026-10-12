// Typst 0.15.1 test suite: tests/suite/model/enum.typ, case enum-numbering-closure.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test numbering with closure.
#enum(
  start: 3,
  spacing: 0.65em - 3pt,
  tight: false,
  numbering: n => text(
    fill: (red, green, blue).at(calc.rem(n, 3)),
    numbering("A", n),
  ),
  [Red], [Green], [Blue], [Red],
)
