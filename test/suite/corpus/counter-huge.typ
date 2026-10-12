// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-huge, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test values greater than 32-bits
#let c = counter("c")
#c.update(100000000001)
#context test(c.get(), (100000000001,))
#c.step()
#context test(c.get(), (100000000002,))
#c.update(n => n + 2)
#context test(c.get(), (100000000004,))
