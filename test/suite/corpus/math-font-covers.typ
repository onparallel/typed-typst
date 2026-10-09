// Typst 0.15.1 test suite: tests/suite/math/text.typ, case math-font-covers, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show math.equation: set text(
  font: (
    // Ignore that this regex actually misses some of the script glyphs...
    (name: "XITS Math", covers: regex("[\u{1D49C}-\u{1D503}]")),
    "New Computer Modern Math"
  ),
  stylistic-set: 1,
)
$ cal(P)_i (X) * cal(C)_1 $
