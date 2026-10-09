// Typst 0.15.1 test suite: tests/suite/text/shift.typ, case sub-super-typographic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(size: 20pt)
// Libertinus Serif supports "subs" and "sups" for `typo` and `sq`, but not for
// `synth`.
#let synth = [1,2,3]
#let typo = [123]
#let sq = [1#box(square(size: 4pt))2]
x#super(synth) x#super(typo) x#super(sq) \
x#sub(synth) x#sub(typo) x#sub(sq)
