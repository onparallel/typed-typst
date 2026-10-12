// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-lr-nested-horizontal-attach, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stretch and lr nested horizontal interactions with attachments.
$ stretch(lr(=, size: #2em))_A
  stretch(lr(=, size: #2em), size: #0em)_A
  stretch(lr(=, size: #2em), size: #50%)_A
  stretch(lr(=, size: #2em), size: #200%)_A \
  lr(stretch(=, size: #2em))_A
  lr(stretch(=, size: #2em), size: #0em)_A
  lr(stretch(=, size: #2em), size: #50%)_A
  lr(stretch(=, size: #2em), size: #200%)_A \
  stretch(lr(=), size: #2em)_A
  stretch(lr(=, size: #0em), size: #2em)_A
  stretch(lr(=, size: #50%), size: #2em)_A
  stretch(lr(=, size: #200%), size: #2em)_A \
  lr(stretch(=), size: #2em)_A
  lr(stretch(=, size: #0em), size: #2em)_A
  lr(stretch(=, size: #50%), size: #2em)_A
  lr(stretch(=, size: #200%), size: #2em)_A $
