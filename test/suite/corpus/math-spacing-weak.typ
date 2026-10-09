// Typst 0.15.1 test suite: tests/suite/math/spacing.typ, case math-spacing-weak, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test weak spacing
$integral f(x) dif x$,
// Not weak
$integral f(x) thin dif x$,
// Both are weak, collide
$integral f(x) #h(0.166em, weak: true)dif x$
