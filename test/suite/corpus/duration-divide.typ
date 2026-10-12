// Typst 0.15.1 test suite: tests/suite/foundations/duration.typ, case duration-divide, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test dividing durations with durations
#test(duration(minutes: 20) / duration(hours: 1), 1 / 3)
#test(duration(minutes: 20) / duration(minutes: 10), 2)
#test(duration(minutes: 20) / duration(minutes: 8), 2.5)
