// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-rtl.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto)
#let c = counter("c")
#let s = context c.display() + c.step()
#let tree = [درخت]
#let line = [A #s B #tree #s #tree #s #tree C #s D #s]
#line \
#line
