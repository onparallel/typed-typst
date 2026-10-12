// Typst 0.15.1 test suite: tests/suite/math/alignment.typ, case math-align-weird, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test alignment step functions.
#show: it => context {
  set page(width: 225pt) if target() == "paged"
  it
}
$
a &= c \
  &= c + 1 & "By definition" \
  &= d + 100 + 1000 \
  &= x && "Even longer" \
$
