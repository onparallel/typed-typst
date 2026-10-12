// Typst 0.15.1 test suite: tests/suite/math/class.typ, case math-class-nested, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test nested.
#let normal = math.class.with("normal")
#let pluseq = $class("binary", normal(+) normal(=))$
$ a pluseq 5 $
