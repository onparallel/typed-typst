// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-selector-or-elements-with-set.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Looking forward to `heading.where(level: 1 | 2)` :)
#show heading.where(level: 1).or(heading.where(level: 2)): set text(red)
= L1
== L2
=== L3
==== L4
