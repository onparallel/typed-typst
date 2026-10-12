// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case hyphenate-pt-dash-emphasis.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// If the hyphen is followed by a space we shall not repeat the hyphen
// at the next line
#set page(width: 4cm)
#set text(lang: "pt", hyphenate: true)

Quebabe é a -melhor- comida que existe.
