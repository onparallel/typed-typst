// Typst 0.15.1 test suite: tests/suite/math/call.typ, case math-call-shadowed-builtin, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// We don't error if we try to call a shadowed standard library function.
#let box = "box"
$ box() $
