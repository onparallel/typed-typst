// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-variable-slnt.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto)
#set text(font: "Roboto Flex")

Hello, _Hello_

#text(style: "italic")[Hello],
#text(style: "oblique")[Hello]

#for slnt in range(0, -10, step: -2, inclusive: true) [
  #text(variations: (slnt: slnt))[Hello.]
]
