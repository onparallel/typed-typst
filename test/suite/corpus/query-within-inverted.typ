// Typst 0.15.1 test suite: tests/suite/introspection/query.typ, case query-within-inverted, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test a case where the ancestor is fully contained in one of the children.
#let m(l) = [#metadata(none)#l]
#strong({
  m(<a>)
  m(<b>)
  m(<c>)
})
#context test(query(selector.within(strong, <b>)), ())
