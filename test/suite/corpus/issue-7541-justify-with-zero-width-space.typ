// Typst 0.15.1 test suite: tests/suite/layout/inline/justify.typ, case issue-7541-justify-with-zero-width-space.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(background: pad(10pt, rect(
  width: 100%,
  height: 100%,
  stroke: 0.5pt + blue
)))
#set par(justify: true)

#let space = h(100% - 3.1em)

#space;Foo Bar Buzz

#space;Foo Bar#sym.zws;Buzz
