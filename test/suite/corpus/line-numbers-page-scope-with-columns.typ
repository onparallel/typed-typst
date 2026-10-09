// Typst 0.15.1 test suite: tests/suite/layout/line-numbers.typ, case line-numbers-page-scope-with-columns.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: (x: 1.1cm), columns: 2)
#set par.line(
  numbering: "1",
  number-clearance: 0.5cm,
  numbering-scope: "page"
)

A \
A \
A
#colbreak()
B \
B \
B
#pagebreak()
One \
Two \
Three
#colbreak()
Four \
Five \
Six
#page[
  Page \
  Elem
  #colbreak()
  Number \
  Reset
]
We're back
#colbreak()
Bye!
