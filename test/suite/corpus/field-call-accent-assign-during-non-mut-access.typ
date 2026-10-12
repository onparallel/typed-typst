// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case field-call-accent-assign-during-non-mut-access, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Using a non-mutating method, `dict.sym.push()`, in an assignment, but
// indirectly via a mutating method, `sym-sym.pop()`.
#{
  let sp-dict = (sym: symbol("p", ("push", sym.tilde)))
  let array = ("sym", "sym")
  sp-dict.at(array.pop()) = sp-dict.at(array.pop()).push(none)
  test(array, ())
}
