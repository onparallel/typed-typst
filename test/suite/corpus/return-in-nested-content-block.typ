// Typst 0.15.1 test suite: tests/suite/scripting/return.typ, case return-in-nested-content-block.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test return with joining and content.

#let f(text, caption: none) = {
  text
  if caption == none [\.#return]
  [, ]
  emph(caption)
  [\.]
}

#f(caption: [with caption])[My figure]

#f[My other figure]
