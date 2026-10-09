// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case field-call-whitespace, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// We allow whitespace around the dot.
#test( "Hi there" . split() , ("Hi", "there"))
