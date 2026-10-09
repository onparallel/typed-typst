// Typst 0.15.1 test suite: tests/suite/styling/show-where.typ, case show-where-optional-field-text.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Note: This show rule is horribly inefficient because it triggers for
// every individual text element. But it should still work.
#show text.where(lang: "de"): set text(red)

#set text(lang: "es")
Hola, mundo!

#set text(lang: "de")
Hallo Welt!

#set text(lang: "en")
Hello World!
