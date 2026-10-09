// Typst 0.15.1 test suite: tests/suite/scripting/get-rule.typ, case get-rule-in-function, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether context is retained in nested function.
#let translate(..args) = args.named().at(text.lang)
#set text(lang: "de")
#context test(translate(de: "Inhalt", en: "Contents"), "Inhalt")
