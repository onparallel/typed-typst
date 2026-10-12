// Typst 0.15.1 test suite: tests/suite/math/equation.typ, case issue-6170-equation-stroke, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// In this bug stroke settings did not apply to math content.
// We expect all of these to have a green stroke.
#set text(stroke: green + 0.5pt)

A $B^2$ $ grave(C)' $
