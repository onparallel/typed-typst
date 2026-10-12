// Typst 0.15.1 test suite: tests/suite/pdftags/footnote.typ, case footnote-tags-different-lang, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
Footnote #footnote[
  // The footnote number is still in English ("en"), so the link tag
  // holding the number should specify its language to be English, so
  // as to override the parent tag's language, which is German ("de").
  #set text(lang: "de")
  Hallo
] in text.
