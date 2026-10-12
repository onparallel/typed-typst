// Typst 0.15.1 test suite: tests/suite/scripting/call.typ, case call-args-spread-type-repr, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test doing things with arguments.
#{
  let save(..args) = {
    test(type(args), arguments)
    test(repr(args), "arguments(three: true, 1, 2)")
  }

  save(1, 2, three: true)
}
