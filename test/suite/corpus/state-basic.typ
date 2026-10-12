// Typst 0.15.1 test suite: tests/suite/introspection/state.typ, case state-basic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let s = state("hey", "a")
#let double(it) = 2 * it

#s.update(double)
#s.update(double)
$ 2 + 3 $
#s.update(double)

Is: #context s.get(),
Was: #context {
  let it = query(math.equation).first()
  s.at(it.location())
}.
