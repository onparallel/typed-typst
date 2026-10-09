// Typst 0.15.1 test suite: tests/suite/scripting/ops.typ, case ops-assign-to-shadowed-std-constant, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Works if we define rect beforehand
// (since then it doesn't resolve to the standard library version anymore).
#let rect = ""
#(rect = "hi")
