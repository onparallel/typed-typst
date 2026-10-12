// Typst 0.15.1 test suite: tests/suite/foundations/bytes.typ, case bytes-addition, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test addition and joining.
#test(bytes((1, 2)) + bytes(()), bytes((1, 2)))
#test(bytes((1, 2)) + bytes((3, 4)), bytes((1, 2, 3, 4)))
#test(bytes(()) + bytes((3, 4)), bytes((3, 4)))
