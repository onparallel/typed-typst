// Typst 0.15.1 test suite: tests/suite/styling/set.typ, case set-vs-construct-2.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that constructor styles win, but not over outer styles.
// The outer paragraph should be right-aligned,
// but the B should be center-aligned.
#set list(marker: [>])
#list(marker: [--])[
  #rect(width: 2cm, fill: conifer, inset: 4pt, list[A])
]
