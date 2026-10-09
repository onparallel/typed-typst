// Typst 0.15.1 test suite: tests/suite/model/cite.typ, case issue-785-cite-locate.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test citation in other introspection.
#set page(width: 180pt)
#set heading(numbering: "1.")

#outline(
  title: [Figures],
  target: figure.where(kind: image),
)

#pagebreak()

= Introduction <intro>
#figure(
  rect(height: 10pt),
  caption: [A pirate @arrgh in @intro],
)

#context [Citation @distress on page #here().page()]

#show bibliography: none
#bibliography("/assets/bib/works.bib", style: "chicago-shortened-notes")
