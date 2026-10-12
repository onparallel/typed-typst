// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-page-header-only-update.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Header should not be affected by default.
// To affect it, put the counter update before the `set page`.
#set page(
  numbering: "1",
  number-align: top + center,
  margin: (top: 20pt),
)

#counter(page).update(5)
