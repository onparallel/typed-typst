// Typst 0.15.1 test suite: tests/suite/introspection/locate.typ, case issue-4029-locate-after-pagebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: 10pt)
#show heading: it => pagebreak() + it

= Introduction
#context test(
  locate(heading).position(),
  (page: 2, x: 10pt, y: 10pt),
)
