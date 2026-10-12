// Typst 0.15.1 test suite: tests/suite/visualize/square.typ, case square-no-overflow.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that square doesn't overflow due to its aspect ratio.
#set page(width: 40pt, height: 25pt, margin: 5pt)
#square()
#square[Hello there]
