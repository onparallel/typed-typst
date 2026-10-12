// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case issue-3275-normal-variable, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Normal variable.
#for x in (1, 2) {}
#for x in (a: 1, b: 2) {}
#for x in "foo" {}
#for x in bytes("😊") {}
