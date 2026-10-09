// Typst 0.15.1 test suite: tests/suite/math/style.typ, case math-style-fallback, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test how math styles fallback.
$upright(frak(bold(alpha))) = upright(bold(alpha)) \
bold(mono(ϝ)) = bold(ϝ) \
sans(Theta) = bold(sans(Theta)) \
bold(upright(planck)) != planck \
bb(e) != italic(bb(e)) \
serif(sans(A)) != serif(A)$
