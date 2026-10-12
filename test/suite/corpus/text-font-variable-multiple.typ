// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-variable-multiple.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Multiple fonts with multiple different axis combinations in one test.
#text(font: "Roboto Flex")[
  Roboto _Flex_
  #text(variations: (GRAD: 150))[
    with #text(stretch: 150%)[*Grade* axis] enabled
  ]
] \
#text(font: "Source Serif 4")[
  Source _Serif_ 4 *Variable*
]
