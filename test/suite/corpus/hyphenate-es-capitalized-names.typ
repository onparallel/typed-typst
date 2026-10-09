// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case hyphenate-es-capitalized-names.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// If the hyphen is followed by a capitalized word we shall not repeat
//  the hyphen at the next line
#set page(width: 6.2cm)
#set text(lang: "es", hyphenate: true)

Tras el estallido de la contienda Ruiz-Giménez fue detenido junto a sus
dos hermanos y puesto bajo custodia por las autoridades republicanas, con
el objetivo de protegerle de las patrullas de milicianos.
