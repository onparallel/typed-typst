// Typst 0.15.1 test suite: tests/suite/scripting/ops.typ, case ops-attempt-nan-length, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that trying to produce a NaN scalar (such as in lengths) does not crash.
#let infpt = float("inf") * 1pt
#test(infpt - infpt, 0pt)
#test(infpt + (-infpt), 0pt)
// TODO: this result is surprising
#test(infpt / float("inf"), 0pt)
