// Typst 0.15.1 test suite: tests/suite/foundations/context.typ, case context-body-atomic-in-markup, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that context body is parsed as atomic expression.
#let c = [#context "hello".]
#test(c.children.first().func(), (context none).func())
#test(c.children.last(), [.])
