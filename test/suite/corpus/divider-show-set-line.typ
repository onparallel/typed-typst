// Typst 0.15.1 test suite: tests/suite/model/divider.typ, case divider-show-set-line.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test customizing line via set rule.
#set page(width: 200pt)
#show divider: set line(stroke: 2pt + red)
Before
#divider()
After
