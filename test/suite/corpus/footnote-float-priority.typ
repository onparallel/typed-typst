// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-float-priority.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt)

#lines(3)

#place(
  top,
  float: true,
  rect(height: 40pt)
)

#block[
  V
  #footnote[1]
  #footnote[2]
  #footnote[3]
  #footnote[4]
]

#lines(5)
