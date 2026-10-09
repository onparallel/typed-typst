// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-covers-numbers.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Change font only for numbers.
#set text(font: (
  (name: "PT Sans", covers: regex("[0-9]")),
  "Libertinus Serif"
))

The number 123.
