// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-margin-inside-outside-override.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt, margin: (inside: 30pt, outside: 20pt))
#set par(justify: true)
#set text(size: 8pt)

#page(margin: (x: 20pt), {
  set align(center + horizon)
  text(20pt, strong[Title])
  v(2em, weak: true)
  text(15pt)[Author]
})

= Introduction
#lorem(35)
