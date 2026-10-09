// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-bare-vs-set-text.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test style precedence.
#set text(fill: eastern, size: 1.5em)
#show: text.with(fill: forest)
Forest
