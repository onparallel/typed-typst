// Typst 0.15.1 test suite: tests/suite/scripting/closure.typ, case issue-non-atomic-closure.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that we can't have non-atomic closures.
#let x = 1
#let c = [#(x) => (1, 2)]
#test(c.children.last(), [(1, 2)]))
