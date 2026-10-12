// Typst 0.15.1 test suite: tests/suite/scripting/while.typ, case while-loop-basic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Should output `2 4 6 8 10`.
#let i = 0
#while i < 10 [
  #(i += 2)
  #i
]

// Should output `Hi`.
#let iter = true
#while iter {
  iter = false
  "Hi."
}

#while false {
  dont-care
}
