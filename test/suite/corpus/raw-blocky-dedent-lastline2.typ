// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-blocky-dedent-lastline2, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let raw = ```
  test
  ```
#test(raw.text, "test")
#test(raw.block, true)
