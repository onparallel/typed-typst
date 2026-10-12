// Typst 0.15.1 test suite: tests/suite/foundations/eval.typ, case eval, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the eval function.
#test(eval("1 + 2"), 3)
#test(eval("1 + x", scope: (x: 3)), 4)
#test(eval("let x = x + 1; x + 1", scope: (x: 1)), 3)
