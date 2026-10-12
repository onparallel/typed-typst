// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case issue-3275-placeholder, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Placeholder.
#for _ in (1, 2) {}
#for _ in (a: 1, b: 2) {}
#for _ in "foo" {}
#for _ in bytes("😊") {}
