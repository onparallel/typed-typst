// Typst 0.15.1 test suite: tests/suite/scripting/blocks.typ, case code-block-nested-scopes, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Multiple nested scopes.
#{
  let a = "a1"
  {
    let a = "a2"
    {
      test(a, "a2")
      let a = "a3"
      test(a, "a3")
    }
    test(a, "a2")
  }
  test(a, "a1")
}
