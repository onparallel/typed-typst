// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-selector-shadowed-builtin-with-std.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let heading = "bar"
#show std.heading: it => text(fill: red, it)
= #heading
