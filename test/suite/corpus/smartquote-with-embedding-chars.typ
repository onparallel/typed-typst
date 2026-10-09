// Typst 0.15.1 test suite: tests/suite/text/smartquote.typ, case smartquote-with-embedding-chars.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(lang: "fr")
"#"\u{202A}"bonjour#"\u{202C}"" \
#"\u{202A}""bonjour"#"\u{202C}"
