// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-skew.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test skewing along one axis.
#set page(width: 100pt, height: 60pt)
#set text(size: 12pt)
#let skewed(body) = box(skew(ax: -30deg, body))

#set skew(reflow: false)
Hello #skewed[World]!

#set skew(reflow: true)
Hello #skewed[World]!
