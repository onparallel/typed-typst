// Typst 0.15.1 test suite: tests/suite/foundations/duration.typ, case duration-add-and-subtract-times, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test adding and subtracting durations and times.
#let a = datetime(hour: 12, minute: 0, second: 0)
#test(a + duration(hours: 1, minutes: -60), datetime(hour: 12, minute: 0, second: 0))
#test(a + duration(hours: 2), datetime(hour: 14, minute: 0, second: 0))
#test(a + duration(minutes: 10), datetime(hour: 12, minute: 10, second: 0))
#test(a + duration(seconds: 30), datetime(hour: 12, minute: 0, second: 30))
#test(a + duration(hours: -2), datetime(hour: 10, minute: 0, second: 0))
#test(a - duration(hours: 2), datetime(hour: 10, minute: 0, second: 0))
#test(a + duration(minutes: -10), datetime(hour: 11, minute: 50, second: 0))
#test(a - duration(minutes: 10), datetime(hour: 11, minute: 50, second: 0))
#test(a + duration(seconds: -30), datetime(hour: 11, minute: 59, second: 30))
#test(a - duration(seconds: 30), datetime(hour: 11, minute: 59, second: 30))
#test(
  a + duration(hours: 1, minutes: 13, seconds: 13),
  datetime(hour: 13, minute: 13, second: 13),
)
