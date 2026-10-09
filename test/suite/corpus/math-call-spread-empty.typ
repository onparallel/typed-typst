// Typst 0.15.1 test suite: tests/suite/math/call.typ, case math-call-spread-empty, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that a spread operator followed by nothing generates two dots.
#let args(..body) = body
#let check(it, r) = test-repr(it.body.text, r)
#check($args(..)$, "arguments(sequence([.], [.]))")
#check($args(.., ..; .. , ..)$, "arguments(\n  (sequence([.], [.]), sequence([.], [.])),\n  (sequence([.], [.]), sequence([.], [.])),\n)")
