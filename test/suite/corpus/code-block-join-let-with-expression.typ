// Typst 0.15.1 test suite: tests/suite/scripting/blocks.typ, case code-block-join-let-with-expression, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Evaluated to int.
#test({
  let x = 1
  let y = 2
  x + y
}, 3)
