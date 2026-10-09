// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case issue-2128-block-width-box.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test box in 100% width block.
#block(width: 100%, fill: red, box("a box"))
#block(width: 100%, fill: red, [#box("a box") #box()])
