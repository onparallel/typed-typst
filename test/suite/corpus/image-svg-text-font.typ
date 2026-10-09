// Typst 0.15.1 test suite: tests/suite/visualize/image.typ, case image-svg-text-font.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 250pt)
#show image: set text(font: ("Roboto", "Noto Serif CJK SC"))

#figure(
  image("/assets/images/chinese.svg"),
  caption: [Bilingual text]
)
