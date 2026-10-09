// Typst 0.15.1 test suite: tests/suite/pdftags/figure.typ, case figure-tags-with-alt-flatten-content-basic, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The inner tags are flattened
#figure(alt: "alt text")[
  $a^2 + b^2 = c^2$

  $sum_(i=1)^n(i)$
]
