// Typst 0.15.1 test suite: tests/suite/text/lorem.typ, case lorem-word-count, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// https://github.com/typst/typst/issues/6186
#let count(n) = lorem(n).replace("–", "").replace(".", "").split(" ").filter(s => s != "").len()
#test(count(193), 193)
#test(count(194), 194)
#test(count(195), 195)
