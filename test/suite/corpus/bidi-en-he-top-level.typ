// Typst 0.15.1 test suite: tests/suite/layout/inline/bidi.typ, case bidi-en-he-top-level.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test reordering with different top-level paragraph directions.
#let content = par[Text טֶקסט]
#text(lang: "he", content)
#text(lang: "de", content)
