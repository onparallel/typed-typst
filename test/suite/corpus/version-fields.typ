// Typst 0.15.1 test suite: tests/suite/foundations/version.typ, case version-fields, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test version fields.
#test(version(1, 2, 3).major, 1)
#test(version(1, 2, 3).minor, 2)
#test(version(1, 2, 3).patch, 3)
