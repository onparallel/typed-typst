// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-horizontal, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stretching along horizontal axis.
#let ext(sym) = math.stretch(sym, size: 2em)
$ ext(arrow.r) quad ext(arrow.l.double.bar) \
  ext(harpoon.rb) quad ext(harpoons.ltrb) \
  ext(paren.t) quad ext(shell.b) \
  ext(eq) quad ext(equiv) $
