// Typst 0.15.1 test suite: tests/suite/model/quote.typ, case quote-nesting-custom.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// With custom quotes.
#set smartquote(quotes: (single: ("<", ">"), double: ("(", ")")))
#quote[A #quote[nested] quote]
