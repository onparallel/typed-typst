// Typst 0.15.1 test suite: tests/suite/layout/inline/bidi.typ, case bidi-consecutive-embedded-ltr-runs.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that consecutive, embedded LTR runs stay LTR.
// Here, we have two runs: "A" and italic "B".
#let content = par[أنت A#emph[B]مطرC]
#set text(font: ("PT Sans", "Noto Sans Arabic"))
#text(lang: "ar", content)
#text(lang: "de", content)
