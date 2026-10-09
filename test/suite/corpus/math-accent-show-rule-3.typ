// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-accent-show-rule-3, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show math.accent: it => {
  show "\u{0300}": set text(green)
  it
}
$grave(x)$, x\u{0300}
