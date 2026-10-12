// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-insert-order, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let dict = (a: 1, b: 2)
#let rhs = (c: 3, a: 4)

// Add
#test((dict + rhs).keys(), ("a", "b", "c"))

// Join
#test({ dict; rhs }.keys(), ("a", "b", "c"))

// Spread
#test((:..dict, ..rhs).keys(), ("a", "b", "c"))

// Insert
#{
  for (k, v) in rhs {
    dict.insert(k, v)
  }
  test(dict.keys(), ("a", "b", "c"))
}

// Assign
#{
  dict.a = 5
  dict.d = 6
  test(dict.keys(), ("a", "b", "c", "d"))
}
