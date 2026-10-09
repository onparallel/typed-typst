// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-complex, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test complex stretch.
$ H stretch(=)^"define" U + p V \
  x stretch(harpoons.ltrb, size: #3em) y
    stretch(\[, size: #150%) z \
  f : X stretch(arrow.hook, size: #150%)_"injective" Y \
  V stretch(->, size: #(100% + 1.5em))^("surjection") ZZ $
