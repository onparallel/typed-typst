// Typst 0.15.1 test suite: tests/suite/layout/inline/bidi.typ, case issue-5276-shaping-consecutive-ltr-with-lang.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let a = text(lang: "ar")[\u{645}]
#a#a
