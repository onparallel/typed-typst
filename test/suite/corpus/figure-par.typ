// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case figure-par.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that a figure body is considered a paragraph.
#show par: highlight

#figure[Text]

#figure(
  [Text],
  caption: [A caption]
)
