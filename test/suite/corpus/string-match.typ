// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-match, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `match` method.
#test("Is there a".match("for this?"), none)
#test(
  "The time of my life.".match(regex("[mit]+e")),
  (start: 4, end: 8, text: "time", captures: ()),
)
