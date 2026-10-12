// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-delim-show-rule-1, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show regex("\\[|\\]"): set text(green, font: "Noto Sans Math")
$ mat(delim: \[, a, b, c; d, e, f; g, h, i) quad [x + y] $
