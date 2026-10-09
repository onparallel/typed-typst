// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case hyphenate-outside-of-words.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// More tests for hyphenation of non-words.
#set text(hyphenate: true)
#block(width: 0pt, "doesn't")
#block(width: 0pt, "(OneNote)")
#block(width: 0pt, "(present)")

#set text(lang: "de")
#block(width: 0pt, "(bzw.)")
