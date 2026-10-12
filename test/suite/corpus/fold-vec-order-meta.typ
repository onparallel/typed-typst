// Typst 0.15.1 test suite: tests/suite/styling/fold.typ, case fold-vec-order-meta.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let c = counter("mycounter")
#c.update(1)

#context [
  #c.update(2)
  #c.get() \
  Second: #context c.get()
]
