// Typst 0.15.1 test suite: tests/suite/styling/set.typ, case set-scoped-in-code-block.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that scoping works as expected.
#{
  if true {
    set text(blue)
    [Blue ]
  }
  [Not blue]
}
