// Typst 0.15.1 test suite: tests/suite/introspection/query.typ, case issue-5117-query-order-place, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let t(expected) = context {
  let elems = query(selector(metadata).after(here()))
  let val = elems.first().value
  test(val, expected)
}

#{
  t("a")
  place(metadata("a"))
}

#{
  t("b")
  block(height: 1fr, metadata("b"))
}
