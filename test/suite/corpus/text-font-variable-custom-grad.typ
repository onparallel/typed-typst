// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-variable-custom-grad.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto)
#set text(font: "Roboto Flex")

#text(variations: (GRAD: -200))[Grade] axis \
Grade axis \
#text(variations: (GRAD: 150))[Grade] axis
