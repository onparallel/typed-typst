// Typst 0.15.1 test suite: tests/suite/model/ref.typ, case issue-4536-non-whitespace-before-ref, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test reference with non-whitespace before it.
#figure[] <1>
#test([(#ref(<1>))], [(@1)])
