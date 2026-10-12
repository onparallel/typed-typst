// Typst 0.15.1 test suite: tests/suite/scripting/params.typ, case issue-1029-parameter-destructuring, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that underscore works in parameter patterns.
#test((1, 2, 3).zip((1, 2, 3)).map(((_, x)) => x), (1, 2, 3))
