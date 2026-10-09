// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case issue-2631-page-header-ordering.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(6pt)
#show heading: set text(6pt, weight: "regular")
#set page(
  margin: (x: 10pt, top: 20pt, bottom: 10pt),
  height: 50pt,
  header: context {
    let prev = query(selector(heading).before(here()))
    let next = query(selector(heading).after(here()))
    let prev = if prev != () { prev.last().body }
    let next = if next != () { next.first().body }
    (prev: prev, next: next)
  }
)

= First
Hi
#pagebreak()
= Second
