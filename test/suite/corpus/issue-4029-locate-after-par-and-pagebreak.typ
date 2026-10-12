// Typst 0.15.1 test suite: tests/suite/introspection/locate.typ, case issue-4029-locate-after-par-and-pagebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that the heading's tag isn't stuck at the end of the paragraph.
#set page(margin: 10pt)
Par
#show heading: it => pagebreak() + it
= Introduction
#context test(locate(heading).page(), 2)
