// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-root-show-rule-5, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show math.root: it => {
  show "√": set text(purple) if it.index == none
  it
}
$ sqrt(1/2) root(3, 1/2) $
