// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-box-with-baseline.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test boxes with a baseline are respected
#box(stroke: 0.2pt, $a #box(baseline:0.5em, stroke: 0.2pt, $a$)$)
