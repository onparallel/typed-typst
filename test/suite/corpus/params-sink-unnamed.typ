// Typst 0.15.1 test suite: tests/suite/scripting/params.typ, case params-sink-unnamed, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// unnamed spread
#let f(.., a) = a
#test(f(1, 2, 3), 3)

// This wasn't allowed before the bug fix ...
#let f(..) = 2
#test(f(arg: 1), 2)
