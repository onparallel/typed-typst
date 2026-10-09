// Typst 0.15.1 test suite: tests/suite/layout/inline/justify.typ, case issue-2419-justify-hanging-indent.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that combination of justification and hanging indent doesn't result in
// an underfull first line.
#set par(hanging-indent: 2.5cm, justify: true)
#lorem(5)
