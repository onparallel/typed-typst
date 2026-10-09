// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-styled-space.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Differently styled spaces between text are not matched by regex rules.
// This is solely due to grouping rules, not space collapsing.
#show " ": "B"
#show "X": "B"
A C \
A#text(red)[ ]C \
A#text(red)[X]C
