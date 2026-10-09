// Typst 0.15.1 test suite: tests/suite/visualize/square.typ, case square-overflow-forced-width.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that a width-overflowing square is laid out regardless of the
// presence of inner content.
#set page(width: 60pt, height: 100pt)
#square(width: 150%)
#square(width: 150%)[Hello there]
