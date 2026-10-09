// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-nested-horizontal-attach, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test nested horizontal stretch interactions with attachments.
$ stretch(stretch(->, size: #4em)) >> stretch(stretch(->, size: #4em))_A \
  stretch(stretch(->, size: #4em), size: #0em) = stretch(stretch(->, size: #4em), size: #0em)_A \
  stretch(stretch(->, size: #500%)) >>> stretch(stretch(->, size: #500%))_A \
  stretch(stretch(->, size: #500%), size: #50%) > stretch(stretch(->, size: #500%), size: #50%)_A \
  stretch(stretch(->, size: #4em), size: #50%) > stretch(stretch(->, size: #4em), size: #50%)_"blah" $
