// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-break-across-pages-nested.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 120pt)
#block[
  #lines(4)
  #footnote[
    #lines(6, "1")
    #footnote(lines(3, "I"))
  ]
]
