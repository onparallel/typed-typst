// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case issue-6125-block-place-width-limited.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that the width of a placed block isn't limited by its siblings.
#set page(height: 70pt)
#let b = block({
  square(size: 20pt, fill: aqua)
  place(top, box(height: 10pt, width: 1fr, fill: blue))
})
#b
#b
