// Typst 0.15.1 test suite: tests/suite/text/smartquote.typ, case smartquote-custom-complex.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Allow 2 graphemes
#set smartquote(quotes: "a\u{0301}a\u{0301}")
"Double and 'Single' Quotes"

#set smartquote(quotes: (single: "a\u{0301}a\u{0301}"))
"Double and 'Single' Quotes"
