// Typst 0.15.1 test suite: tests/suite/pdftags/figure.typ, case figure-tags-additional-caption-inside-body, attributes: pdftags.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#figure(caption: [The real caption])[
  #image(alt: "A tiger", "/assets/images/tiger.jpg"),
  #figure.caption[Additional caption]
]
