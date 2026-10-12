// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-push-and-pop, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `push` and `pop` methods.
#{
  let tasks = (a: (1, 2, 3), b: (4, 5, 6))
  test(tasks.at("a").pop(), 3)
  tasks.b.push(7)
  test(tasks.a, (1, 2))
  test(tasks.at("b"), (4, 5, 6, 7))
}
