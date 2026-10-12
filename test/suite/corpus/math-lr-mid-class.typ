// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-mid-class, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that `mid` creates a Relation, but that can be overridden.
$ (a | b) $
$ (a mid(|) b) $
$ (a class("unary", |) b) $
$ (a class("unary", mid(|)) b) $
$ (a mid(class("unary", |)) b) $
