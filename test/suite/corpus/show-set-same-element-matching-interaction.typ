// Typst 0.15.1 test suite: tests/suite/styling/show-set.typ, case show-set-same-element-matching-interaction.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that show-set rules on the same element don't affect each other. This
// could be implemented, but isn't as of yet.
#show heading.where(level: 1): set heading(numbering: "(I)")
#show heading.where(numbering: "(I)"): set text(red)
= Heading
