// Typst 0.15.1 test suite: tests/suite/visualize/stroke.typ, case issue-3700-deformed-stroke.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test shape fill & stroke for specific values that used to make the stroke
// deformed.
#rect(
  radius: 1mm,
  width: 100%,
  height: 10pt,
  stroke: (left: rgb("46b3c2") + 16.0mm),
)
