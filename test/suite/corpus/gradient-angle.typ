// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-angle, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(gradient.linear(red, green).angle(), 0deg)
#test(gradient.linear(red, green, dir: ltr).angle(), 0deg)
#test(gradient.linear(red, green, dir: rtl).angle(), 180deg)
#test(gradient.linear(red, green, dir: ttb).angle(), 90deg)
#test(gradient.linear(red, green, dir: btt).angle(), 270deg)
