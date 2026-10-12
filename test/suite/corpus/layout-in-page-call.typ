// Typst 0.15.1 test suite: tests/suite/layout/layout.typ, case layout-in-page-call.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Layout without any container should provide the page's dimensions, minus its margins.
#page(width: 100pt, height: 100pt, {
  layout(size => [This page has a width of #size.width and height of #size.height ])
  h(1em)
  place(left, rect(width: 80pt, stroke: blue))
})
