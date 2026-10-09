// Typst 0.15.1 test suite: tests/suite/math/cancel.typ, case math-cancel-inverted.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Inverted
$a + cancel(x, inverted: #true) - cancel(x, inverted: #true) + 10 + cancel(y) - cancel(y)$
$ x + cancel("abcdefg", inverted: #true) $
