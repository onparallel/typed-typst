// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-nested-scopes.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that scoping works as expected.
#{
  let world = [ World ]
  show "W": strong
  world
  {
    set text(blue)
    show: it => {
      show "o": "Ø"
      it
    }
    world
  }
  world
}
