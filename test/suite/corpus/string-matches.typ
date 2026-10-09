// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-matches, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `matches` method.
#test("Hello there".matches("\d"), ())
#test("Day by Day.".matches("Day"), (
  (start: 0, end: 3, text: "Day", captures: ()),
  (start: 7, end: 10, text: "Day", captures: ()),
))

// Compute the sum of all timestamps in the text.
#let timesum(text) = {
  let time = 0
  for match in text.matches(regex("(\\d+):(\\d+)")) {
    let caps = match.captures
    time += 60 * int(caps.at(0)) + int(caps.at(1))
  }
  str(int(time / 60)) + ":" + str(calc.rem(time, 60))
}

#test(timesum(""), "0:0")
#test(timesum("2:70"), "3:10")
#test(timesum("1:20, 2:10, 0:40"), "4:10")
