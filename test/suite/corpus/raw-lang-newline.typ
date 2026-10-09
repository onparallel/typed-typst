// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-lang-newline, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The language tag stops at a newline.
#let raw = ```lang
test
```
#test(raw.lang, "lang")
#test(raw.text, "test")
#test(raw.block, true)
