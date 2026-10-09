// Typst 0.15.1 test suite: tests/suite/styling/set.typ, case set-shadowed-builtin-with-std.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let text = "bar"
#set std.text(fill: red)
#text
