// Typst 0.15.1 test suite: tests/suite/pdftags/lang.typ, case lang-tags-propagation, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(lang: "nl")
A paragraph.

// The list bullets are in spanish :)
#set text(lang: "es", region: "co")
- #text(lang: "de", region: none, "a")
  - #text(lang: "de", region: "at", "b")
  - #text(lang: "de", region: none, "c")
- #text(lang: "de", region: none, "d")
