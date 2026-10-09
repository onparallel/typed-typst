// Typst 0.15.1 test suite: tests/suite/styling/set.typ, case set-vs-construct-1.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that constructor styles aren't passed down the tree.
// The inner list should have no extra indent.
#set par(leading: 2pt)
#list(body-indent: 20pt, [First], list[A][B])
