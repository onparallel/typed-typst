// Typst 0.15.1 test suite: tests/suite/text/smartquote.typ, case smartquote-disabled-temporarily.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test changing properties within text.
"She suddenly started speaking french: #text(lang: "fr", region: "CH")['Je suis une banane.']" Roman told me.

Some people's thought on this would be #[#set smartquote(enabled: false); "strange."]
