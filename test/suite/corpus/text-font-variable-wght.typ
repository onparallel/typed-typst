// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-variable-wght.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto)
#for (font, tech) in (("Fraunces", "TTF"), ("Cantarell", "CFF2")) [
  #set text(font: "Fraunces")
  = #tech

  Hello, *Hello*

  #for weight in range(200, 900, step: 100, inclusive: true) [
    #text(weight: weight)[Hello.]
  ]

  #for weight in range(200, 900, step: 100, inclusive: true) [
    #text(variations: (wght: weight))[Hello.]
  ]
]
