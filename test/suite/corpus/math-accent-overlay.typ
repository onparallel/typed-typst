// Typst 0.15.1 test suite: tests/suite/math/accent.typ, case math-accent-overlay, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure accent is laid out above the base.
#show "\u{0338}": set text(red)
$accent(W, \u{0338})$, $accent(y, \u{0338})$
