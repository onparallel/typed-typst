// Typst 0.15.1 test suite: tests/suite/scripting/return.typ, case return-join, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test return with joining.

#let f(x) = {
  "a"
  if x == 0 {
    return "b"
  } else if x == 1 {
    "c"
  } else {
    "d"
    return
    "e"
  }
}

#test(f(0), "b")
#test(f(1), "ac")
#test(f(2), "ad")
