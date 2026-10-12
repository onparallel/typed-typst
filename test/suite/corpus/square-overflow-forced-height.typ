// Typst 0.15.1 test suite: tests/suite/visualize/square.typ, case square-overflow-forced-height.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that a height-overflowing square is laid out regardless of the
// presence of inner content.
#set page(width: 120pt, height: 60pt)
#square(height: 150%)
#square(height: 150%)[Hello there]
