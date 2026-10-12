// Typst 0.15.1 test suite: tests/suite/foundations/content.typ, case content-label-has-method.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether the label is accessible through the `has` method.
#show heading: it => {
  assert(it.has("label"))
  it
}

= Hello, world! <my-label>
