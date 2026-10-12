// Typst 0.15.1 test suite: tests/suite/scripting/closure.typ, case closure-capture-from-popped-stack-frame, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Capture environment.
#{
  let mark = "!"
  let greet = {
    let hi = "Hi"
    name => {
        hi + ", " + name + mark
    }
  }

  test(greet("Typst"), "Hi, Typst!")

  // Changing the captured variable after the closure definition has no effect.
  mark = "?"
  test(greet("Typst"), "Hi, Typst!")
}
