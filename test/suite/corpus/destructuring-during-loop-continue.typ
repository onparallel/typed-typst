// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-during-loop-continue.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test continue while destructuring.
// Should output "one = I \ two = II \ one = I".
#for num in (1, 2, 3, 1) {
  let (word, roman) = if num == 1 {
    ("one", "I")
  } else if num == 2 {
    ("two", "II")
  } else {
    continue
  }
  [#word = #roman \ ]
}
