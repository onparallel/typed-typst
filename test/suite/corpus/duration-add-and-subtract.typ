// Typst 0.15.1 test suite: tests/suite/foundations/duration.typ, case duration-add-and-subtract, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test adding and subtracting durations.
#test(duration(weeks: 1, hours: 1), duration(weeks: 1) + duration(hours: 1))
#test(duration(weeks: 1, hours: -1), duration(weeks: 1) - duration(hours: 1))
#test(duration(days: 6, hours: 23), duration(weeks: 1) - duration(hours: 1))
