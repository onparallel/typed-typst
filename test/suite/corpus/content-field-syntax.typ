// Typst 0.15.1 test suite: tests/suite/foundations/content.typ, case content-field-syntax, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test fields on elements.
#show list: it => {
  test(it.children.len(), 3)
}

- A
- B
- C
