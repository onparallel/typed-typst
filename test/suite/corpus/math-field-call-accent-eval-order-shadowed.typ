// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case math-field-call-accent-eval-order-shadowed, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test shadowing a variable in arguments while calling a method on it in math.
#{
  let sm = symbol("m", ("method", sym.tilde))
  test($sm.method(#let sm = false;)$, $#sym.tilde(none)$)
  test(sm, false)
}
