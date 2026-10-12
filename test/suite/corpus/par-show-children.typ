// Typst 0.15.1 test suite: tests/suite/model/par.typ, case par-show-children.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Variant 1: Prevent recursion by checking the children.
#let p = counter("p")
#let step = p.step()
#let nr = context p.display()
#show par: it => {
  if it.body.at("children", default: ()).at(0, default: none) == step {
    return it
  }
  par(step + [§#nr ] + it.body)
}

= A

B

C #parbreak() D

#block[E]

#block[F #parbreak() G]
