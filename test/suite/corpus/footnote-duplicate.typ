// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-duplicate.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test duplicate footnotes.
#let lang = footnote[Languages.]
#let nums = footnote[Numbers.]

/ "Hello": A word #lang
/ "123": A number #nums

- "Hello" #lang
- "123" #nums

+ "Hello" #lang
+ "123" #nums

#table(
  columns: 2,
  [Hello], [A word #lang],
  [123], [A number #nums],
)
