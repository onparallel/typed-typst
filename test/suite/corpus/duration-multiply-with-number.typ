// Typst 0.15.1 test suite: tests/suite/foundations/duration.typ, case duration-multiply-with-number, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test multiplying and dividing durations with numbers.
#test(duration(minutes: 10) * 6, duration(hours: 1))
#test(duration(minutes: 10) * 2, duration(minutes: 20))
#test(duration(minutes: 10) * 2.5, duration(minutes: 25))
#test(duration(minutes: 10) / 2, duration(minutes: 5))
#test(duration(minutes: 10) / 2.5, duration(minutes: 4))
