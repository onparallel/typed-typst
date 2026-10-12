// Typst 0.15.1 test suite: tests/suite/math/op.typ, case math-op-stretch-relative, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that math.op's large class setting doesn't affect relative stretch
// resolution.
$ op(stretch(|, size: #300%)) stretch(|, size: #300%) $
