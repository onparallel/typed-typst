// Typst 0.15.1 test suite: tests/suite/scripting/closure.typ, case closure-shadows-outer-var, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Redefined variable.
#{
  let x = 1
  let f() = {
    let x = x + 2
    x
  }
  test(f(), 3)
}
