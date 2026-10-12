// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-let-dict-with-sink-empty, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Destructuring with an empty sink and empty dict.
#let (..a) = (:)
#test(a, (:))
