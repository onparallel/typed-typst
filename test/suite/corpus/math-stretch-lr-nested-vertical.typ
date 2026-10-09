// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-lr-nested-vertical, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stretch and lr nested vertical interactions.
$ stretch(lr(arrow.t, size: #3em))
  stretch(lr(arrow.t, size: #3em), size: #0em)
  stretch(lr(arrow.t, size: #3em), size: #50%)
  stretch(lr(arrow.t, size: #3em), size: #200%),
  lr(stretch(arrow.t, size: #3em))
  lr(stretch(arrow.t, size: #3em), size: #0em)
  lr(stretch(arrow.t, size: #3em), size: #50%)
  lr(stretch(arrow.t, size: #3em), size: #200%),
  stretch(lr(arrow.t), size: #3em)
  stretch(lr(arrow.t, size: #0em), size: #3em)
  stretch(lr(arrow.t, size: #50%), size: #3em)
  stretch(lr(arrow.t, size: #200%), size: #3em),
  lr(stretch(arrow.t), size: #3em)
  lr(stretch(arrow.t, size: #0em), size: #3em)
  lr(stretch(arrow.t, size: #50%), size: #3em)
  lr(stretch(arrow.t, size: #200%), size: #3em) $
