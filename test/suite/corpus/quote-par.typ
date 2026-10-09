// Typst 0.15.1 test suite: tests/suite/model/quote.typ, case quote-par.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that an inline quote is part of a paragraph, but a block quote
// does not result in paragraphs.
#show par: highlight

An inline #quote[quote.]

#quote(block: true, attribution: [The Test Author])[
  A block-level quote.
]
