// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-text-size.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Values retrieved from function are not resolved at the moment.
// Ideally the left size would match the right size.
#let size = context [#text.size.to-absolute() #1em.to-absolute()]
$ size x^size x^x^size $
