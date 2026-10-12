// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case issue-3275-destructuring, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Destructuring.
#for (a,b,c) in (("a", 1, bytes(())), ("b", 2, bytes(""))) {}
#for (a, ..) in (("a", 1, bytes(())), ("b", 2, bytes(""))) {}
#for (k, v)  in (a: 1, b: 2, c: 3) {}
#for (.., v) in (a: 1, b: 2, c: 3) {}
