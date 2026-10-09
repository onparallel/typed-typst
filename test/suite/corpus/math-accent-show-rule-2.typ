// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-accent-show-rule-2, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let rhat(x) = {
  show "\u{0302}": set text(red)
  math.hat(x)
}
$hat(x)$, $rhat(x)$, $hat(rhat(x))$, $rhat(hat(x))$, x\u{0302}
