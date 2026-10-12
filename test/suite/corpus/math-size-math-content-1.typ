// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-size-math-content-1.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Nested math content has styles overwritten by the inner equation.
// Ideally the widths would match the actual length of the arrows.
#let arrow = $stretch(->)^"much text"$
$ arrow A^arrow A^A^arrow $
#let width = context measure(arrow).width
$ width A^width A^A^width $
