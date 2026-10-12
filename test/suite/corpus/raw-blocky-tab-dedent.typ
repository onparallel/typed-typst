// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-blocky-tab-dedent, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// This one is a bit problematic because there is a trailing tab below "test"
// which the editor constantly wants to remove.
#let raw = eval("```\n\ttest\n  \n ```")
#test(raw.text, "test\n ")
#test(raw.block, true)
