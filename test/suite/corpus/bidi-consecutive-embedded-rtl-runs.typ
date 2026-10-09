// Typst 0.15.1 test suite: tests/suite/layout/inline/bidi.typ, case bidi-consecutive-embedded-rtl-runs.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that consecutive, embedded RTL runs stay RTL.
// Here, we have three runs: "גֶ", bold "שֶׁ", and "ם".
#let content = par[Aגֶ#strong[שֶׁ]םB]
#set text(font: ("Libertinus Serif", "Noto Serif Hebrew"))
#text(lang: "he", content)
#text(lang: "de", content)
