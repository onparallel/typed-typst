// Typst 0.15.1 test suite: tests/suite/scripting/return.typ, case return-discard-not-content, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that non-content joined value is not a warning.
#let f() = {
  (33,)
  return (66,)
}

#test(f(), (66, ))
