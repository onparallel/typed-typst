// Typst 0.15.1 test suite: tests/suite/foundations/content.typ, case content-label-fields-method.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether the label is accessible through the fields method.
#show heading: it => {
  assert("label" in it.fields())
  assert(str(it.fields().label) == "my-label")
  it
}

= Hello, world! <my-label>
