// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-fields, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test field on dictionary.
#let dict = (nothing: "ness", hello: "world")
#test(dict.nothing, "ness")
#{
  let world = dict
    .hello

  test(world, "world")
}
