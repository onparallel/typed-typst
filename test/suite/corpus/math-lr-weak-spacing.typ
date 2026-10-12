// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-weak-spacing, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test ignoring weak spacing immediately after the opening
// and immediately before the closing.
$ [#h(1em, weak: true)A(dif x, f(x) dif x)sum#h(1em, weak: true)] $
$ lr(\[#h(1em, weak: true)lr(A dif x, f(x) dif x\))sum#h(1em, weak:true)a) $
