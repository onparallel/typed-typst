// Typst 0.15.1 test suite: tests/suite/math/class.typ, case math-class-chars, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test characters.
$ a class("normal", +) b \
  a class("binary", .) b \
  lr(class("opening", \/) a/b class("closing", \\)) \
  { x class("fence", \;) x > 0} \
  a class("large", \/) b \
  a class("punctuation", :) b \
  a class("relation", !) b \
  a + class("unary", times) b \
  class("vary", :) a class("vary", :) b $
