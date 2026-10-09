// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-blocky-dedent-firstline4, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The first line is not affected by dedent, and the middle lines don't consider
// the whitespace prefix of the first line.
#let raw = ```     test
  test2
  ```
#test(raw.text, "    test\ntest2")
#test(raw.block, true)
