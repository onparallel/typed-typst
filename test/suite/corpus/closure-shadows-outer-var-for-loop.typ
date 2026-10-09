// Typst 0.15.1 test suite: tests/suite/scripting/closure.typ, case closure-shadows-outer-var-for-loop, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// For loop bindings.
#{
  let v = (1, 2, 3)
  let f() = {
    let s = 0
    for v in v { s += v }
    s
  }
  test(f(), 6)
}
