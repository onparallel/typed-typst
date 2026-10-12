// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-rule-in-function.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test show rule in function.
#let starwars(body) = {
  show list: it => block({
    stack(dir: ltr,
      text(red, it),
      1fr,
      scale(x: -100%, text(blue, it)),
    )
  })
  body
}

- Normal list

#starwars[
  - Star
  - Wars
  - List
]

- Normal list
