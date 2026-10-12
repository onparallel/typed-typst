// Typst 0.15.1 test suite: tests/suite/pdftags/figure.typ, case figure-tags-alt-with-different-lang, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(lang: "de")
Ein Paragraph.

#set text(lang: "en", region: "uk")
#figure(image(alt: "A tiger", "/assets/images/tiger.jpg"))
