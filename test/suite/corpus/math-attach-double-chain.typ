// Typst 0.15.1 test suite: tests/suite/math/attach.typ, case math-attach-double-chain, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test attachment chain grouping with doubled operators and primes
$ mat(delim: #none,
  a_1_2^3,  b^1^2_3,  c_1^2^3,  d^1_2_3;
  a'_1_2^3, b'^1^2_3, c'_1^2^3, d'^1_2_3;
  a_1'_2^3, b^1'^2_3, c_1'^2^3, d^1'_2_3;
) $
