// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-lr-nested-vertical-attach, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stretch and lr nested vertical interactions with attachments.
$ stretch(lr(arrow.t, size: #3em))^A
  stretch(lr(arrow.t, size: #3em), size: #0em)^A
  stretch(lr(arrow.t, size: #3em), size: #50%)^A
  stretch(lr(arrow.t, size: #3em), size: #200%)^A,
  lr(stretch(arrow.t, size: #3em))^A
  lr(stretch(arrow.t, size: #3em), size: #0em)^A
  lr(stretch(arrow.t, size: #3em), size: #50%)^A
  lr(stretch(arrow.t, size: #3em), size: #200%)^A,
  stretch(lr(arrow.t), size: #3em)^A
  stretch(lr(arrow.t, size: #0em), size: #3em)^A
  stretch(lr(arrow.t, size: #50%), size: #3em)^A
  stretch(lr(arrow.t, size: #200%), size: #3em)^A,
  lr(stretch(arrow.t), size: #3em)^A
  lr(stretch(arrow.t, size: #0em), size: #3em)^A
  lr(stretch(arrow.t, size: #50%), size: #3em)^A
  lr(stretch(arrow.t, size: #200%), size: #3em)^A $
