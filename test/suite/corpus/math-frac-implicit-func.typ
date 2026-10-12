// Typst 0.15.1 test suite: tests/suite/math/frac.typ, case math-frac-implicit-func, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test other precedence interactions with implicit function calls.
$
  f'(x) / f_pi{x} \
  sin^2(x) / f_0(x) quad f!(x) / g^(-1)(x) \
  a_\u{2a}[|x} / a_"2a"{x|] quad f_pi.alt{x} / f_#math.pi.alt{x} \
  a(b)_c(d)^e(f) / g(h)'_i(j)' \
  (x)'(x)'(x)' / (x)'(x)'(x)' \
$
