// Typst 0.15.1 test suite: tests/suite/scripting/call.typ, case call-args-lone-underscore, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that lone underscore works.
#test((1, 2, 3).map(_ => {}).len(), 3)
