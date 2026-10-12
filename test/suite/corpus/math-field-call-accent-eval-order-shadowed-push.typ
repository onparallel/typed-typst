// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case math-field-call-accent-eval-order-shadowed-push, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Math doesn't support mutable methods and always evaluates arguments second.
#{
  let sp = symbol("p", ("push", sym.tilde))
  test($sp.push(#let sp = false;)$, $#sym.tilde(none)$)
  test(sp, false)
}
