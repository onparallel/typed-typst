// Typst 0.15.1 test suite: tests/suite/scripting/while.typ, case while-loop-expr, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Value of while loops.

#test(while false {}, none)

#let i = 0
#test(type(while i < 1 [#(i += 1)]), content)
