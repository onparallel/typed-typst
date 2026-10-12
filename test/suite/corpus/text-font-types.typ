// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-types, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let ubuntu = (name: "Ubuntu", covers: regex("[\u{20}-\u{FFFF}]"))
#set text(font: ubuntu)
#set text(font: (ubuntu, "Ubuntu"))
