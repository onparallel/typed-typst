// Typst 0.15.1 test suite: tests/suite/foundations/duration.typ, case duration-from-date-subtraction, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test subtracting dates.
#let a = datetime(hour: 12, minute: 0, second: 0)
#let b = datetime(day: 1, month: 1, year: 2000)
#test(datetime(hour: 14, minute: 0, second: 0) - a, duration(hours: 2))
#test(datetime(hour: 14, minute: 0, second: 0) - a, duration(minutes: 120))
#test(datetime(hour: 13, minute: 0, second: 0) - a, duration(seconds: 3600))
#test(datetime(day: 1, month: 2, year: 2000) - b, duration(days: 31))
#test(datetime(day: 15, month: 1, year: 2000) - b, duration(weeks: 2))
