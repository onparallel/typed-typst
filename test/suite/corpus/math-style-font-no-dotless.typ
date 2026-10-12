// Typst 0.15.1 test suite: tests/suite/math/style.typ, case math-style-font-no-dotless, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test dotless i and j codepoints work without the dtls feature. In
// particular, make sure that the variation selector is not present with scr
// and cal.
#show math.equation: set text(font: "Libertinus Math")
$ dotless.i dotless.j, upright(dotless.i dotless.j),
  scr(dotless.i dotless.j), cal(dotless.i dotless.j),
  frak(dotless.i dotless.j), mono(dotless.i dotless.j),
  upright(bold(dotless.i dotless.j)), bold(upright(sans(dotless.i dotless.j))) $
