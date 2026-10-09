// Typst 0.15.1 test suite: tests/suite/math/mozilla-mathml-test.typ, case mozilla-mathml-test-18, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set math.frac(style: "horizontal")
$
  f(x) = cases(
    1/3 & "if" 0 <= x <= 1\;,
    2/3 & "if" 3 <= x <= 4\;,
    0 & "elsewhere".
  )
$
