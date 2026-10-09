// Typst 0.15.1 test suite: tests/suite/math/underover.typ, case math-underover-shells, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test tortoise shell brackets.
$ undershell(
  1 + overshell(2 + ..., x + y),
  "all stuff"
) $
