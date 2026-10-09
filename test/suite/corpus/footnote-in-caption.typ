// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-in-caption.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test footnote in caption.
Read the docs #footnote[https://typst.app/docs]!
#figure(
  image("/assets/images/graph.png", width: 70%),
  caption: [
    A graph #footnote[A _graph_ is a structure with nodes and edges.]
  ]
)
More #footnote[just for ...] footnotes #footnote[... testing. :)]
