// Typst 0.15.1 test suite: tests/suite/math/accent.typ, case math-accent-nested, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test nested top and bottom accents.
$hat(accent(L, \u{0330})), accent(circle(p), \u{0323}),
  macron(accent(caron(accent(A, \u{20ED})), \u{0333})) \
  breve(accent(eta, \u{032E})) = accent(breve(eta), \u{032E})$
