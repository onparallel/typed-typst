// Typst 0.15.1 test suite: tests/suite/scripting/loop.typ, case loop-continue-basic, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test continue.

#let i = 0
#let x = 0

#while x < 8 {
  i += 1
  if calc.rem(i, 3) == 0 {
    continue
  }
  x += i
}

// If continue did not work, this would equal 10.
#test(x, 12)
