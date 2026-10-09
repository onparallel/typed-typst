// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-vertical-scripts, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test vertical stretch interactions with script attachments.
#let big = $stretch(|, size: #4em)$
$ big_0^1 stretch(|, size: #1.5em)_0^1
  stretch(big, size: #1em)_0^1 |_0^1 $
