// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case field-call-mut-basic, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Mutating methods mutate a variable.
#let numbers = (1, 2, 3)
#test(numbers.remove(1), 2)
#test(numbers, (1, 3))
