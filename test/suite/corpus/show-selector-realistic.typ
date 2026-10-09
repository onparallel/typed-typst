// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-selector-realistic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test integrated example.
#show heading: it => block({
  set text(10pt)
  box(move(dy: -1pt)[📖])
  h(5pt)
  if it.level == 1 {
    underline(text(1.25em, blue, it.body))
  } else {
    text(red, it.body)
  }
})

= Task 1
Some text.

== Subtask
Some more text.

= Task 2
Another text.
