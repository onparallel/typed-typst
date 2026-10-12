// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-dict-underscore, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Here, `best` was accessed as a variable, where it shouldn't have.
#{
  (best: _) = (best: "brr")
}
