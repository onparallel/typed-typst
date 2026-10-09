// Typst 0.15.1 test suite: tests/suite/introspection/tags.typ, case tags-textual.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that tags and spaces aren't reordered in textual grouping.
A#metadata(none)<a> #metadata(none)<b>#box[B]

#context assert(
  locate(<a>).position().x + 1pt < locate(<b>).position().x
)
