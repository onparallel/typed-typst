// Typst 0.15.1 test suite: tests/suite/scripting/call.typ, case call-args-spread-override, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test standard argument overriding.
#{
  let f(style: "normal", weight: "regular") = {
    "(style: " + style + ", weight: " + weight + ")"
  }

  let myf(..args) = f(weight: "bold", ..args)
  test(myf(), "(style: normal, weight: bold)")
  test(myf(weight: "black"), "(style: normal, weight: black)")
  test(myf(style: "italic"), "(style: italic, weight: bold)")
}
