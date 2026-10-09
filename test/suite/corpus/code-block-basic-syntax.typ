// Typst 0.15.1 test suite: tests/suite/scripting/blocks.typ, case code-block-basic-syntax.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).

// Evaluates to join of none, [My ] and the two loop bodies.
#{
  let parts = ("my fri", "end.")
  [Hello, ]
  for s in parts [#s]
}

// Evaluates to join of the content and strings.
#{
  [How]
  if true {
    " are"
  }
  [ ]
  if false [Nope]
  [you] + "?"
}
