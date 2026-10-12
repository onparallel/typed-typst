// Typst 0.15.1 test suite: tests/suite/math/call.typ, case math-call-named-basic, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Named arguments in math.
#let args(..body) = body
#let check(it, r) = test-repr(it.body.text, r)
#check($args(_a: a)$, "arguments(_a: [a])")
#check($args(_a-b: a)$, "arguments(_a-b: [a])")
#check($args(a-b: a)$, "arguments(a-b: [a])")
#check($args(a-b-c: a)$, "arguments(a-b-c: [a])")
#check($args(a--c: a)$, "arguments(a--c: [a])")
#check($args(a: a-b)$, "arguments(a: sequence([a], [−], [b]))")
#check($args(a: a:b)$, "arguments(a: sequence([a], [:], [b]))")
#check($args(a: a : b)$, "arguments(a: sequence([a], [ ], [:], [ ], [b]))")
#check($args(a-b: a-b)$, "arguments(a-b: sequence([a], [−], [b]))")
#check($args(a-b)$, "arguments(sequence([a], [−], [b]))")
