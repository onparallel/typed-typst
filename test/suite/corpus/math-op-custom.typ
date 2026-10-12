// Typst 0.15.1 test suite: tests/suite/math/op.typ, case math-op-custom, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test custom operator.
$ op("myop", limits: #false)_(x:=1) x \
  op("myop", limits: #true)_(x:=1) x $
