// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-entry.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test customization.
#show footnote: set text(red)
#show footnote.entry: set text(8pt, style: "italic")
#set footnote.entry(
  indent: 0pt,
  gap: 0.6em,
  clearance: 0.3em,
  separator: repeat[.],
)

Beautiful footnotes. #footnote[Wonderful, aren't they?]
