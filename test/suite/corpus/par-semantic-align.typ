// Typst 0.15.1 test suite: tests/suite/model/par.typ, case par-semantic-align.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show par: highlight
#show bibliography: none
#set block(width: 100%, stroke: 1pt, inset: 5pt)

#bibliography("/assets/bib/works.bib")

#block[
  #set align(right)
  Hello
]

#block[
  #set align(right)
  Hello
  @netwok
]

#block[
  Hello
  #align(right)[World]
  You
]

#block[
  Hello
  #align(right)[@netwok]
  You
]
