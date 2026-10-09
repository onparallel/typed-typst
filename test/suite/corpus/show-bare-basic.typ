// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-bare-basic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 130pt)
#set text(0.7em)

#align(center)[
  #text(1.3em)[*Essay on typography*] \
  T. Ypst
]

#show: columns.with(2)
#lines(16)
