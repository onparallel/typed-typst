// Typst 0.15.1 test suite: tests/suite/layout/inline/baseline.typ, case issue-2214-baseline-math.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The math content should also be affected by the TextElem baseline.
hello #text(baseline: -5pt)[123 #sym.WW\orld]\
hello #text(baseline: -5pt)[$123 WW#text[or]$ld]\
