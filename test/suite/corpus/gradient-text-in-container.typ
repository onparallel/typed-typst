// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-text-in-container.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that gradient fills on text work for locally defined gradients.
#set page(width: auto, height: auto, margin: 10pt)
#show box: set text(fill: gradient.linear(..color.map.rainbow))
Hello, #box[World]!
