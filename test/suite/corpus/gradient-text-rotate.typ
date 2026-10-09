// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-text-rotate.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that gradients fills on text work with transforms.
#set page(width: auto, height: auto, margin: 10pt)
#show box: set text(fill: gradient.linear(..color.map.rainbow))
#rotate(45deg, box[World])
