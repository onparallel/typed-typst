// Typst 0.15.1 test suite: tests/suite/scripting/call.typ, case issue-886-args-sink.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test bugs with argument sinks.
#let foo(..body) = repr(body.pos())
#foo(a: "1", b: "2", 1, 2, 3, 4, 5, 6)
