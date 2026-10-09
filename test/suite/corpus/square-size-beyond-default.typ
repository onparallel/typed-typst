// Typst 0.15.1 test suite: tests/suite/visualize/square.typ, case square-size-beyond-default.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that setting a square's height beyond its default sizes it correctly.
#square()
#square(height: 60pt)
#square(width: 60pt)
#square(size: 60pt)
