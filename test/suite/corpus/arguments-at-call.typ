// Typst 0.15.1 test suite: tests/suite/foundations/arguments.typ, case arguments-at-call, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test calling a function in an argument via `.at()`.
#let args = arguments(x => x + 1, func: x => x + 2)
#test(args.at(0)(0), 1)
#test(args.at("func")(0), 2)
