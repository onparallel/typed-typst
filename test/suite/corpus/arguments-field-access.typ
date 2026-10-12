// Typst 0.15.1 test suite: tests/suite/foundations/arguments.typ, case arguments-field-access, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let args = arguments(0, 1, a: 2, 3, b: arguments(5, c: 4))
#test(args.a, 2)
#test(args.b, arguments(5, c: 4))
#test(args.b.c, 4)
#test(args.b.at(0), 5)
#test(args.b.at("c"), 4)
#test(args.at("b").c, 4)
