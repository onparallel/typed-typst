// Typst 0.15.1 test suite: tests/suite/scripting/destructuring.typ, case destructuring-let-array-placeholders, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Destructuring with multiple placeholders.
#let (a, _, c, _) = (1, 2, 3, 4)
#test(a, 1)
#test(c, 3)
