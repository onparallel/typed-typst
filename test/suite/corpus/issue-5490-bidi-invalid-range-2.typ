// Typst 0.15.1 test suite: tests/suite/layout/inline/bidi.typ, case issue-5490-bidi-invalid-range-2.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
  columns: (1fr, 1fr),
  lines(6),
  [
    #text(lang: "ar", font: ("Libertinus Serif", "Noto Sans Arabic"))[مجرد نص مؤقت لأغراض العرض التوضيحي. ]
    #text(lang: "ar")[سلام]
  ],
)
