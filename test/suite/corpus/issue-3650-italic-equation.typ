// Typst 0.15.1 test suite: tests/suite/math/style.typ, case issue-3650-italic-equation.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
_abc $sin(x) "abc"$_ \
$italic(sin(x) "abc" #box[abc])$ \
*abc $sin(x) "abc"$* \
$bold(sin(x) "abc" #box[abc])$ \
