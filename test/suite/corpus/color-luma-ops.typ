// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case color-luma-ops, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test gray color modification.
#test-repr(luma(20%).lighten(50%), luma(60%))
#test-repr(luma(80%).darken(20%), luma(64%))
#test-repr(luma(80%).negate(space: luma), luma(20%))
