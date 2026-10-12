// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-vertical-large-class, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test vertical stretch of large math class characters that are stretched in
// display size automatically.
$integral
 stretch(integral, size: #3em)
 stretch(integral, size: #0em)
 stretch(integral, size: #50%)
 stretch(integral, size: #200%)$
$ integral
  stretch(integral, size: #3em)
  stretch(integral, size: #0em)
  stretch(integral, size: #50%)
  stretch(integral, size: #200%) $
