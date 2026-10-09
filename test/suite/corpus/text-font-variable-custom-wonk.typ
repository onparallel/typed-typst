// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-variable-custom-wonk.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto)
#set text(font: "Fraunces", size: 25pt)

// WONK only kicks in at point sizes > 18pt.
#text(variations: (WONK: 0))[minimum] \
minimum \
#text(variations: (WONK: 1))[minimum]
