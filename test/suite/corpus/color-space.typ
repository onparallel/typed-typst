// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case color-space, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test color kind method.
#test(rgb(1, 2, 3, 4).space(), rgb)
#test(cmyk(4%, 5%, 6%, 7%).space(), cmyk)
#test(luma(40).space(), luma)
#test(rgb(1, 2, 3, 4).space() != luma, true)
