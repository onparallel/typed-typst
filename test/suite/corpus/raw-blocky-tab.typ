// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-blocky-tab, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let raw = {
```
	test
```
}
#test(raw.text, "\ttest")
#test(raw.block, true)
