// Typst 0.15.1 test suite: tests/suite/foundations/datetime.typ, case datetime-ordinal, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test date methods.
#test(datetime(day: 1, month: 1, year: 2000).ordinal(), 1);
#test(datetime(day: 1, month: 3, year: 2000).ordinal(), 31 + 29 + 1);
#test(datetime(day: 31, month: 12, year: 2000).ordinal(), 366);
#test(datetime(day: 1, month: 3, year: 2001).ordinal(), 31 + 28 + 1);
#test(datetime(day: 31, month: 12, year: 2001).ordinal(), 365);
