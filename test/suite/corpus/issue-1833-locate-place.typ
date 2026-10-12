// Typst 0.15.1 test suite: tests/suite/introspection/locate.typ, case issue-1833-locate-place.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 60pt)
#context {
  place(right + bottom, rect())
  test(here().position(), (page: 1, x: 10pt, y: 10pt))
}
