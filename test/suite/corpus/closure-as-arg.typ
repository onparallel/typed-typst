// Typst 0.15.1 test suite: tests/suite/scripting/closure.typ, case closure-as-arg, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Pass closure as argument and return closure.
// Also uses shorthand syntax for a single argument.
#{
  let chain = (f, g) => (x) => f(g(x))
  let f = x => x + 1
  let g = x => 2 * x
  let h = chain(f, g)
  test(h(2), 5)
}
