// Typst 0.15.1 test suite: tests/suite/math/attach.typ, case math-attach-high, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test high subscript and superscript.
$ sqrt(a_(1/2)^zeta), sqrt(a_alpha^(1/2)), sqrt(a_(1/2)^(3/4)) \
  sqrt(attach(a, tl: 1/2, bl: 3/4)),
  sqrt(attach(a, tl: 1/2, bl: 3/4, tr: 1/2, br: 3/4)) $
