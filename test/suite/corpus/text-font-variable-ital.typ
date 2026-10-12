// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-variable-ital.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(font: "Mona Sans")
Hello _Hello_

#text(variations: (ital: 0))[Hello]
#text(variations: (ital: 1))[Hello]
