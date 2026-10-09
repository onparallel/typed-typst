// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-marker-align-vertical.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
- #box(fill: teal, inset: 10pt)[a]

#set list(marker-align: top)
- #box(fill: teal, inset: 10pt)[b]

#set list(marker-align: horizon)
- #box(fill: teal, inset: 10pt)[c]

#set list(marker-align: bottom)
- #box(fill: teal, inset: 10pt)[d]
