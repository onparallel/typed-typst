// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-covers-repeat.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Repeatedly use the same font.
#set text(font: (
  (name: "Libertinus Serif", covers: regex("[0-9]")),
  "Libertinus Serif"
))

The number 123.
