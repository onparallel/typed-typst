// Typst 0.15.1 test suite: tests/suite/math/call.typ, case math-call-basic, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Function arguments in math.
#let args(..body) = body
#let check(it, r) = test-repr(it.body.text, r)
#check($args(a)$, "arguments([a])")
#check($args(a,)$, "arguments([a])")
#check($args(a,b)$, "arguments([a], [b])")
#check($args(a,b,)$, "arguments([a], [b])")
