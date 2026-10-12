// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-nested, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test nested lr calls.
// As there is no body, relative lengths are relative to 0.
#let body1 = math.lr($|$, size: 4em)
#let body2 = $lr(|, size: #4em)$

$lr(|, size: #2em)$
$lr(lr(|, size: #4em), size: #50%)$
$lr(body1, size: #50%)$
$lr(body2, size: #50%)$
