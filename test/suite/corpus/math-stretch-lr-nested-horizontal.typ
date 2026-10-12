// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-lr-nested-horizontal, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stretch and lr nested horizontal interactions.
$ stretch(lr(=, size: #2em))
  stretch(lr(=, size: #2em), size: #0em)
  stretch(lr(=, size: #2em), size: #50%)
  stretch(lr(=, size: #2em), size: #200%) \
  lr(stretch(=, size: #2em))
  lr(stretch(=, size: #2em), size: #0em)
  lr(stretch(=, size: #2em), size: #50%)
  lr(stretch(=, size: #2em), size: #200%) \
  stretch(lr(=), size: #2em)
  stretch(lr(=, size: #0em), size: #2em)
  stretch(lr(=, size: #50%), size: #2em)
  stretch(lr(=, size: #200%), size: #2em) \
  lr(stretch(=), size: #2em)
  lr(stretch(=, size: #0em), size: #2em)
  lr(stretch(=, size: #50%), size: #2em)
  lr(stretch(=, size: #200%), size: #2em) $
