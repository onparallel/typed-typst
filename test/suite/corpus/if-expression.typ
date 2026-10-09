// Typst 0.15.1 test suite: tests/suite/scripting/if.typ, case if-expression, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Value of if expressions.

#{
  let x = 1
  let y = 2
  let z

  // Returns if branch.
  z = if x < y { "ok" }
  test(z, "ok")

  // Returns else branch.
  z = if x > y { "bad" } else { "ok" }
  test(z, "ok")

  // Missing else evaluates to none.
  z = if x > y { "bad" }
  test(z, none)
}
