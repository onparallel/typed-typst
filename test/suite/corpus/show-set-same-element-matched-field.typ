// Typst 0.15.1 test suite: tests/suite/styling/show-set.typ, case show-set-same-element-matched-field.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test setting the thing we just matched on.
// This is quite cursed, but it works.
#set heading(numbering: "(I)")
#show heading.where(numbering: "(I)"): set heading(numbering: "1.")
= Heading
