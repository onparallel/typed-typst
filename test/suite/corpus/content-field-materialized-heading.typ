// Typst 0.15.1 test suite: tests/suite/foundations/content.typ, case content-field-materialized-heading.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test it again with a different element.
#set heading(numbering: "(I)")
#show heading: set text(size: 11pt, weight: "regular")
#show heading: it => it.numbering
= Heading
