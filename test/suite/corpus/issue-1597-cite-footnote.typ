// Typst 0.15.1 test suite: tests/suite/model/cite.typ, case issue-1597-cite-footnote.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Tests that when a citation footnote is pushed to next page, things still
// work as expected.
#set page(height: 60pt)
A

#footnote[@netwok]
#show bibliography: none
#bibliography("/assets/bib/works.bib")
