// Typst 0.15.1 test suite: tests/suite/math/style.typ, case math-style-cluster, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test styling a grapheme cluster.
#let cluster = symbol("U\u{fe00}")
$cluster bb(cluster) bold(sans(upright(cluster))) scr(cluster) bold(cal(cluster))$
