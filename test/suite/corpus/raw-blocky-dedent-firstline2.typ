// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-blocky-dedent-firstline2, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// When there is content in the first line, we discard a single whitespace char.
#let raw = ``` test
```
#test(raw.text, "test")
#test(raw.block, true)
