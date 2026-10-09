// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case issue-math-realize-show.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that content in math can be realized without breaking
// nested equations.
#let my = $pi$
#let f1 = box(baseline: 10pt, [f])
#let f2 = context f1
#show math.vec: [nope]

$ pi a $
$ my a $
$ 1 + sqrt(x/2) + sqrt(#hide($x/2$)) $
$ a x #link("url", $+ b$) $
$ f f1 f2 $
$ vec(1,2) * 2 $
