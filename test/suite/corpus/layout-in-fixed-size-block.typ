// Typst 0.15.1 test suite: tests/suite/layout/layout.typ, case layout-in-fixed-size-block.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Layout inside a block with certain dimensions should provide those dimensions.
#set page(height: 120pt)
#block(width: 60pt, height: 80pt, layout(size => [
  This block has a width of #size.width and height of #size.height
]))
