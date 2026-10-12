// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-break-across-pages-block.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt)
#block[
  #lines(3) #footnote(lines(6, "1"))
  #footnote[Y]
  #footnote[Z]
]
