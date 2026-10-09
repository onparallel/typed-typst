// Typst 0.15.1 test suite: tests/suite/text/smartquote.typ, case smartquote-custom.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Use language quotes for missing keys, allow partial reset
#set smartquote(quotes: "«»")
"Double and 'Single' Quotes"

#set smartquote(quotes: (double: auto, single: "«»"))
"Double and 'Single' Quotes"
