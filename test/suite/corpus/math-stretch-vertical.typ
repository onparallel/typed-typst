// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-vertical, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stretching along vertical axis.
#let ext(sym) = math.stretch(sym, size: 2em)
$ ext(bar.v) quad ext(bar.v.double) quad
  ext(chevron.l) quad ext(chevron.r) quad
  ext(paren.l) quad ext(paren.r) \
  ext(bracket.l.stroked) quad ext(bracket.r.stroked) quad
  ext(brace.l) quad ext(brace.r) quad
  ext(bracket.l) quad ext(bracket.r) $
