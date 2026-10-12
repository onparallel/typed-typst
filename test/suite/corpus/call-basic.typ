// Typst 0.15.1 test suite: tests/suite/scripting/call.typ, case call-basic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).

// Omitted space.
#let f() = {}
#[#f()*Bold*]

// Call return value of function with body.
#let f(x, body) = (y) => [#x] + body + [#y]
#f(1)[2](3)

// Don't parse this as a function.
#test (it)

#let f(body) = body
#f[A]
#f()[A]
#f([A])

#let g(a, b) = a + b
#g[A][B]
#g([A], [B])
#g()[A][B]
