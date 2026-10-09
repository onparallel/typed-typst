// Typst 0.15.1 test suite: tests/suite/model/quote.typ, case quote-dir-author-pos, attributes: paged pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Text direction affects author positioning
#set text(font: ("Libertinus Serif", "Noto Sans Arabic"))
And I quote: #quote(attribution: [René Descartes])[cogito, ergo sum].

#set text(lang: "ar")
#quote(attribution: [عالم])[مرحبًا]
