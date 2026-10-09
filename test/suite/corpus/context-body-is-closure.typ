// Typst 0.15.1 test suite: tests/suite/foundations/context.typ, case context-body-is-closure.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Regression test since this used to be a hard crash.
#(context (a: none) => {})
