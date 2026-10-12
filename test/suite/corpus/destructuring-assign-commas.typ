// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-assign-commas, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test comma placement in destructuring assignment.
#let array = (1, 2, 3)
#((key: array.at(1)) = (key: "hi"))
#test(array, (1, "hi", 3))

#let array = (1, 2, 3)
#((array.at(1)) = ("hi"))
#test(array, (1, "hi", 3))

#let array = (1, 2, 3)
#((array.at(1),) = ("hi",))
#test(array, (1, "hi", 3))

#let array = (1, 2, 3)
#((array.at(1)) = ("hi",))
#test(array, (1, ("hi",), 3))
