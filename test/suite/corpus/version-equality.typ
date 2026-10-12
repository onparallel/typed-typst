// Typst 0.15.1 test suite: tests/suite/foundations/version.typ, case version-equality, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test equality of different-length versions
#test(version(), version(0))
#test(version(0), version(0, 0))
#test(version(1, 2), version(1, 2, 0, 0, 0, 0))
