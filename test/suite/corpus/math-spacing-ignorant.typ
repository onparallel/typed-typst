// Typst 0.15.1 test suite: tests/suite/math/spacing.typ, case math-spacing-ignorant.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test spacing with ignorant elements
$#metadata(none) "text"$ \
$#place(dx: 5em)[Placed] "text"$ \
// Operator spacing
$#counter("test").update(3) + b$ \
$#place(dx: 5em)[a] + b$
// Validate that ignorant elements are layouted
#context test(counter("test").get(), (3,))
