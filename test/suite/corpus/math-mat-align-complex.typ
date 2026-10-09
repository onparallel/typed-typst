// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-align-complex, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test #460 equations.
#let stop = {
  math.class("punctuation",$.$)
}
$ mat(&a+b,c;&d, e) $
$ mat(&a+b&,c;&d&, e) $
$ mat(&&&a+b,c;&&&d, e) $
$ mat(stop &a+b&stop,c;...stop stop&d&...stop stop, e) $
