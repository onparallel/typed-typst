// Typst 0.15.1 test suite: tests/suite/scripting/call.typ, case issue-3502-space-and-comments-around-destructuring-colon, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let ( key :  /* hi */ binding ) = ( key: "ok" )
#test(binding, "ok")
