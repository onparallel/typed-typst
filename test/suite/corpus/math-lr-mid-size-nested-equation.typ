// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-mid-size-nested-equation, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test mid size when lr size is set, when nested in an equation.
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}

#let body = ${ A mid(|) integral }$
$ lr(body) quad
  lr(size: #1em, body) quad
  lr(size: #(1em+20%), body) $
