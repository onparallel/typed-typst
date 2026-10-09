// Typst 0.15.1 test suite: tests/suite/pdftags/figure.typ, case figure-tags-image-figure-with-caption, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#figure(
  // The image doesn't create a duplicate figure tag
  // and the alt description is used in the outer figure.
  image(alt: "A tiger", "/assets/images/tiger.jpg"),
  // The caption is stored outside of the figure tag
  // grouped in a nonstruct.
  caption: [Some caption]
)
