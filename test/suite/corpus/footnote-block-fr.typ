// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-block-fr.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 110pt)
A
#block(width: 100%, height: 1fr, fill: aqua)[
  B #footnote[I] #footnote[II]
]
C
