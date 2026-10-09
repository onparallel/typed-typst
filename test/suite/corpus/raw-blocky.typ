// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-blocky, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The first line and the last line are ignored.
#let raw = {
```
test
```
}
#test(raw.text, "test")
#test(raw.block, true)
