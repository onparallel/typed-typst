// Typst 0.15.1 test suite: tests/suite/scripting/call.typ, case call-aliased-function, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Call function assigned to variable.
#let alias = type
#test(alias(alias), type)
