// Typst 0.15.1 test suite: tests/suite/math/op.typ, case math-op-scripts-vs-limits, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test scripts vs limits.
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}
#set text(font: "New Computer Modern")
Discuss $lim_(n->oo) 1/n$ now.
$ lim_(n->infinity) 1/n = 0 $
