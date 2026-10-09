// Typst 0.15.1 test suite: tests/suite/model/enum.typ, case enum-syntax-number-length.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that indentation works from the beginning of a number, not the end.

10. a
   11. b
 12. c // same level as b
  13. d // indented past c
14. e
