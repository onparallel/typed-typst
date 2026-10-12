// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-bleed.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(
  width: 3cm,
  height: 3cm,
  margin: 1cm,
  bleed: 1cm,
  background: rect(width: 100%, height: 100%, fill: green),
)

#context {
  place(
    center + horizon,
    rect(width: page.width, height: page.height, fill: red),
  )
  place(
    center + horizon,
    rect(width: 100%, height: 100%, fill: blue),
  )
}
