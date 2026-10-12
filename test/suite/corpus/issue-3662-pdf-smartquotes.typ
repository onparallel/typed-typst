// Typst 0.15.1 test suite: tests/suite/text/smartquote.typ, case issue-3662-pdf-smartquotes.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Smart quotes were not appearing in the PDF outline, because they didn't
// implement `PlainText`.
= It's "Unnormal Heading"
= It’s “Normal Heading”

#set smartquote(enabled: false)
= It's "Unnormal Heading"
= It's 'single quotes'
= It’s “Normal Heading”
