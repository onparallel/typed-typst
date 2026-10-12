// Typst 0.15.1 test suite: tests/suite/scripting/call.typ, case issue-3502-space-around-param-colon, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that a space after a named parameter is permissible.
#let f( param : v ) = param
#test(f( param /* ok */ : 2 ), 2)
