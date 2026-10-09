// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-nested, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test nested stretch calls.
$ stretch(=, size: #2em) \
  stretch(stretch(=, size: #4em), size: #50%) $

#let base = math.stretch($=$, size: 4em)
$ stretch(base, size: #50%) $

#let base = $stretch(=, size: #4em) $
$ stretch(base, size: #50%) $
