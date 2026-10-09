// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-color.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test colored delimiters
$ lr(
    text(\(, fill: #green) a/b
    text(\), fill: #blue)
  ) $
