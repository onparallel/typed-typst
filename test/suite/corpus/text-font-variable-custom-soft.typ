// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-variable-custom-soft.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Soft axis becomes more visible at large font size, so we increase it and then
// scale down to avoid a huge test image.
#set text(font: "Fraunces", size: 100pt)
#scale(20%, reflow: true)[
  #set text(variations: (SOFT: 0))
  Soft?
  #set text(variations: (SOFT: 100))
  Soft!
]
