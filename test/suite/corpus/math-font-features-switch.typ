// Typst 0.15.1 test suite: tests/suite/math/text.typ, case math-font-features-switch, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let scr(it) = text(stylistic-set: 1, $cal(it)$)
$cal(P)_i != scr(P)_i$, $cal(bold(I))_l != bold(scr(I))_l$
$ product.co_(B in scr(B))^(B in scr(bold(B))) cal(B)(X) $
