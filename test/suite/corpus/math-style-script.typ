// Typst 0.15.1 test suite: tests/suite/math/style.typ, case math-style-script, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test variation selectors for scr and cal.
$cal(A) scr(A) bold(cal(O)) scr(bold(O))$

#show math.equation: set text(font: "Noto Sans Math")
$scr(E) cal(E) bold(scr(Y)) cal(bold(Y))$
