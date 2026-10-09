// Typst 0.15.1 test suite: tests/suite/math/accent.typ, case math-accent-bottom-subscript, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test effect of bottom accent on subscript.
$q_x != accent(q, \u{032C})_x != accent(accent(q, \u{032C}), \u{032C})_x$
