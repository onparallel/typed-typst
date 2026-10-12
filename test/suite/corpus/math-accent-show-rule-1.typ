// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-accent-show-rule-1, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show "\u{0302}": set text(blue, font: "XITS Math")
$hat(x)$, $hat(hat(x))$, x\u{0302}
