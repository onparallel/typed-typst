// Typst 0.15.1 test suite: tests/suite/scripting/let.typ, case let-termination.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Termination.

// Terminated by line break.
#let v1 = 1
One

// Terminated by semicolon.
#let v2 = 2; Two

// Terminated by semicolon and line break.
#let v3 = 3;
Three

#test(v1, 1)
#test(v2, 2)
#test(v3, 3)
