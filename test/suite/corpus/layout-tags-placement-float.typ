// Typst 0.15.1 test suite: tests/suite/pdftags/layout.typ, case layout-tags-placement-float, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(lang: "de")
#grid(
  columns: 2,
  [
    #set text(lang: "be")
    text
    #place(float: true, top + left)[
      `a`
    ]
  ],
  [
    text
    #place(float: true, top + left)[
      #set text(lang: "fr")
      text in grid
    ]
    text
  ],
  [
    #set text(lang: "es")
    b
  ]
)
