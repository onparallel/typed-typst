// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-break-across-pages-float.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 180pt)

#lines(5)

#place(
  bottom,
  float: true,
  rect(height: 50pt, width: 100%, {
    footnote(lines(6, "1"))
    footnote(lines(2, "I"))
  })
)

#lines(5)
