// Typst 0.15.1 test suite: tests/suite/text/lang.typ, case text-lang-hyphenate.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that setting the language does have effects.
#set text(hyphenate: true)
#grid(
  columns: 2 * (20pt,),
  gutter: 1fr,
  text(lang: "en")["Eingabeaufforderung"],
  text(lang: "de")["Eingabeaufforderung"],
)
