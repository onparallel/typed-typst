// Typst 0.15.1 test suite: tests/suite/styling/set.typ, case closure-path-resolve-in-layout-phase.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test relative path resolving in layout phase.
#let choice = ("monkey.svg", "rhino.png", "tiger.jpg")
#set enum(numbering: n => {
  let path = "/assets/images/" + choice.at(n - 1)
  move(dy: -0.15em, image(path, width: 1em, height: 1em))
})

+ Monkey
+ Rhino
+ Tiger
