// Typst 0.15.1 test suite: tests/suite/math/accent.typ, case math-accent-dotless, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test dotless glyph variants.
#let test(c) = $grave(#c), acute(sans(#c)), hat(frak(#c)), tilde(mono(#c)),
  macron(bb(#c)), dot(cal(#c)), diaer(upright(#c)), breve(bold(#c)),
  circle(bold(upright(#c))), caron(upright(sans(#c))), arrow(bold(frak(#c)))$
$test(i) \ test(j)$
