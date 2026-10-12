// Typst 0.15.1 test suite: tests/suite/scripting/let.typ, case let-valid-idents, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test what constitutes a valid Typst identifier.
#let name = 1
#test(name, 1)
#let name_ = 1
#test(name_, 1)
#let name-2 = 1
#test(name-2, 1)
#let name_2 = 1
#test(name_2, 1)
#let __name = 1
#test(__name, 1)
#let ůñıćóðė = 1
#test(ůñıćóðė, 1)
