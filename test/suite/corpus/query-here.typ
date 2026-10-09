// Typst 0.15.1 test suite: tests/suite/introspection/query.typ, case query-here, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that `here()` yields the context element's location.
#context test(query(here()).first().func(), (context none).func())
