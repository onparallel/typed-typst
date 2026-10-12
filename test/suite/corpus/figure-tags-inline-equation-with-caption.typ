// Typst 0.15.1 test suite: tests/suite/pdftags/figure.typ, case figure-tags-inline-equation-with-caption, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#figure(
  math.equation(
    alt: "The Pythagorean theorem: a squared plus b squared is c squared",
    $a^2 + b^2 = c^2$,
  ),
  caption: [Some caption]
)
