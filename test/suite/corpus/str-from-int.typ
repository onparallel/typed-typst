// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case str-from-int, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `str` function with integers.
#test(str(12), "12")
#test(str(1234567890), "1234567890")
#test(str(0123456789), "123456789")
#test(str(0), "0")
#test(str(-0), "0")
#test(str(-1), "−1")
#test(str(-9876543210), "−9876543210")
#test(str(-0987654321), "−987654321")
#test(str(4 - 8), "−4")
