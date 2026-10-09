// Typst 0.15.1 test suite: tests/suite/styling/show-set.typ, case show-set-same-element-and-order.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test both things at once.
#show heading: set text(red)
= Level 1
== Level 2

#show heading.where(level: 1): set text(blue)
#show heading.where(level: 1): set text(green)
#show heading.where(level: 1): set heading(numbering: "(I)")
= Level 1
== Level 2
