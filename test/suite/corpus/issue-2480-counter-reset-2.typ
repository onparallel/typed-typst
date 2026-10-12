// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case issue-2480-counter-reset-2.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set block(spacing: 3pt)
#let c = counter("c")
#let foo() = context {
  c.step()
  c.display("1")
  str(c.get().first())
}

#foo()
#block(foo())
#foo()
#foo()
#block(foo())
#block(foo())
#foo()
