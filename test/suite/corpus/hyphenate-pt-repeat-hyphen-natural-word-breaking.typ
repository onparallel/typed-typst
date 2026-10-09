// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case hyphenate-pt-repeat-hyphen-natural-word-breaking.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The word breaker naturally breaks arco-da-velha at arco-/-da-velha,
// so we shall repeat the hyphen, even that hyphenate is set to false.
#set page(width: 4cm)
#set text(lang: "pt")

Alguma coisa no arco-da-velha é algo que está muito longe.
