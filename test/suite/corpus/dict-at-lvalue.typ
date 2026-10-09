// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-at-lvalue, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test lvalue and rvalue access.
#{
  let dict = (a: 1, "b b": 1)
  dict.at("b b") += 1
  dict.state = (ok: true, err: false)
  test(dict, (a: 1, "b b": 2, state: (ok: true, err: false)))
  test(dict.state.ok, true)
  dict.at("state").ok = false
  test(dict.state.ok, false)
  test(dict.state.err, false)
}
