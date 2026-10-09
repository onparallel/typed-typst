// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case hyphenate-punctuation.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// This sequence would confuse hypher if we passed trailing / leading
// punctuation instead of just the words. So this tests that we don't
// do that. The test passes if there's just one hyphenation between
// "net" and "works".
#set page(width: 60pt)
#set text(hyphenate: true)
#h(6pt) networks, the rest.
