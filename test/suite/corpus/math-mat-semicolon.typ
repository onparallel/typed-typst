// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-semicolon, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test semicolon syntax.
#set align(center)
$mat() dot
 mat(;) dot
 mat(1, 2) dot
 mat(1, 2;) \
 mat(1; 2) dot
 mat(1, 2; 3, 4) dot
 mat(1 + &2, 1/2; &3, 4)$
