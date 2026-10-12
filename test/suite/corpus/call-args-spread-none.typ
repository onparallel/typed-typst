// Typst 0.15.1 test suite: tests/suite/scripting/call.typ, case call-args-spread-none, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// None is spreadable.
#let f() = none
#f(..none)
#f(..if false {})
#f(..for x in () [])
