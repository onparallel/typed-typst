// Typst 0.15.1 test suite: tests/suite/introspection/locate.typ, case issue-1886-locate-after-metadata.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show heading: it => {
  metadata(it.label)
  pagebreak(weak: true, to: "odd")
  it
}

Hi
= Hello <hello>
= World <world>

// The metadata's position does not migrate to the next page, but the heading's
// does.
#context {
  test(locate(metadata.where(value: <hello>)).page(), 1)
  test(locate(<hello>).page(), 3)
  test(locate(metadata.where(value: <world>)).page(), 3)
  test(locate(<world>).page(), 5)
}
