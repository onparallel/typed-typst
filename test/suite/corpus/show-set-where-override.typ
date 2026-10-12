// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-set-where-override.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show heading: set text(green)
#show heading.where(level: 1): set text(red)
#show heading.where(level: 2): set text(blue)
= Red
== Blue
=== Green
