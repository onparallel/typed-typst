// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case issue-2480-counter-reset.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let q = counter("question")
#let step-show =  q.step() + context q.display("1")
#let g = grid(step-show, step-show, gutter: 2pt)

#g
#pagebreak()
#step-show
#q.update(10)
#g
