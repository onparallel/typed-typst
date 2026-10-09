// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case str-from-float, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `str` function with floats.
#test(str(12.0), "12")
#test(str(3.14), "3.14")
#test(str(1234567890.0), "1234567890")
#test(str(0123456789.0), "123456789")
#test(str(0.0), "0")
#test(str(-0.0), "0")
#test(str(-1.0), "−1")
#test(str(-9876543210.0), "−9876543210")
#test(str(-0987654321.0), "−987654321")
#test(str(-3.14), "−3.14")
#test(str(4.0 - 8.0), "−4")
