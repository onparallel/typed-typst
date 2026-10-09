// Typst 0.15.1 test suite: tests/suite/pdftags/figure.typ, case figure-tags-with-alt-flatten-content-complex, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#figure(alt: "alt text")[
  #table(
    columns: 2,
    // The link tag needs to be retained
    link("https://github.com/typst/typst")[
      #image("/assets/images/tiger.jpg")
    ],
    image("/assets/images/tiger.jpg"),
    [Some more text],
  )
]
