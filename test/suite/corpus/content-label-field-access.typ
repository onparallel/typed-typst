// Typst 0.15.1 test suite: tests/suite/foundations/content.typ, case content-label-field-access.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether the label is accessible through field syntax.
#show heading: it => {
  assert(str(it.label) == "my-label")
  it
}

= Hello, world! <my-label>
