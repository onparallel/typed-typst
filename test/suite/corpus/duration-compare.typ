// Typst 0.15.1 test suite: tests/suite/foundations/duration.typ, case duration-compare, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test comparing durations
#test(duration(minutes: 20) > duration(minutes: 10), true)
#test(duration(minutes: 20) >= duration(minutes: 10), true)
#test(duration(minutes: 10) < duration(minutes: 20), true)
#test(duration(minutes: 10) <= duration(minutes: 20), true)
#test(duration(minutes: 10) == duration(minutes: 10), true)
#test(duration(minutes: 10) != duration(minutes: 20), true)
#test(duration(minutes: 10) <= duration(minutes: 10), true)
#test(duration(minutes: 10) >= duration(minutes: 10), true)
#test(duration(minutes: 20) < duration(minutes: 10), false)
#test(duration(minutes: 20) <= duration(minutes: 10), false)
#test(duration(minutes: 20) == duration(minutes: 10), false)
