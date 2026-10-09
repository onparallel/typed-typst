// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case field-call-accent-indirect-non-mut, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Using a non-mutating method, `dict.sym.push()`, in its own argument, but
// indirectly via a mutating method, `sym-sym.pop()`.
#{
  let sp-dict = (sym: symbol("p", ("push", sym.tilde)))
  let array = ("sym", "sym")
  let result = sp-dict
    .at(array.pop())
    .push(
      sp-dict.at(array.pop()).push(none)
    )
  test(result, sym.tilde(sym.tilde(none)))
  test(array, ())
}
