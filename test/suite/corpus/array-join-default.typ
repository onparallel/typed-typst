// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-join-default, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(().join(default: "EMPTY", ", "), "EMPTY")
#test(("hello",).join(default: "EMPTY", ", "), "hello")
#test(("hello", "world").join(default: "EMPTY", ", "), "hello, world")
