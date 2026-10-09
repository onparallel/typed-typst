// Typst 0.15.1 test suite: tests/suite/model/par.typ, case par-semantic-tag.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show par: highlight
#block[
  #metadata(none) <hi1>
  A
  #metadata(none) <hi2>
]

#block(width: 100%, metadata(none) + align(center)[A])
#block(width: 100%, align(center)[A] + metadata(none))
