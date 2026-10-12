// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case color-transparentize, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test alpha modification.
#test-repr(luma(100%, 100%).transparentize(50%), luma(100%, 50%))
#test-repr(luma(100%, 100%).transparentize(75%), luma(100%, 25%))
#test-repr(luma(100%, 50%).transparentize(50%), luma(100%, 25%))
#test-repr(luma(100%, 10%).transparentize(250%), luma(100%, 0%))
#test-repr(luma(100%, 40%).transparentize(-50%), luma(100%, 70%))
#test-repr(luma(100%, 0%).transparentize(-100%), luma(100%, 100%))
