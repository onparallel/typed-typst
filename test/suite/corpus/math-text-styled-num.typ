// Typst 0.15.1 test suite: tests/suite/math/text.typ, case math-text-styled-num, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that styled numbers are treated the same as unstyled ones.
$ a"123.4"b quad a "123.4" b $
#show text: math.bold
$ a"123.4"b quad a "123.4" b $
