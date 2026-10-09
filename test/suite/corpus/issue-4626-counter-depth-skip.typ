// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case issue-4626-counter-depth-skip, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// When we step and skip a level, the levels should be filled with zeros, not
// with ones.
#let c = counter("c")
#context test(c.get(), (0,))
#c.step(level: 4)
#context test(c.get(), (0, 0, 0, 1))
#c.step(level: 1)
#context test(c.get(), (1,))
#c.step(level: 3)
#context test(c.get(), (1, 0, 1))
