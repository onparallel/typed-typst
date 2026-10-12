// Typst 0.15.1 test suite: tests/suite/math/text.typ, case math-font-fallback-class, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that math class is preserved even when the result is a tofu.
#show math.equation: set text(font: "Garamond-Math", fallback: false)
$ brace.stroked.l -1 brace.stroked.r $
$ lr(brace.stroked.l -1 brace.stroked.r) $
