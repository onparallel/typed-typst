// Typst 0.15.1 test suite: tests/suite/layout/inline/linebreak.typ, case issue-1920-linebreak-guillemets.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// In languages like French and German, manually added spaces before and after
// guillemets should not be breakable.
#set page(width: 125pt)

#set text(lang: "fr")
Les principales « guillemets ».\
Et les autres ‹ guillemets › en français & suisse romande.

#set text(lang: "de")
Alternative »Anführungszeichen« in DE & AT.
