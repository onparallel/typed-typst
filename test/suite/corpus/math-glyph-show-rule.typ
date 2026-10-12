// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-glyph-show-rule, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show "+": set text(orange, font: "Noto Sans Math")
$ 1 + 1 = +2 $
#show "+": text(2em)[#sym.plus.o]
$ 1 + 1 = +2 $
