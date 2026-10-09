// Typst 0.15.1 test suite: tests/suite/introspection/locate.typ, case issue-4029-locate-after-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: 10pt)
#show heading: it => v(40pt) + it

= Introduction
#context test(
  locate(heading).position(),
  (page: 1, x: 10pt, y: 50pt),
)
