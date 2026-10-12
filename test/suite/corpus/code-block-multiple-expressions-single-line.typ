// Typst 0.15.1 test suite: tests/suite/scripting/blocks.typ, case code-block-multiple-expressions-single-line, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Evaluates to string.
#test({ let x = "m"; x + "y" }, "my")
