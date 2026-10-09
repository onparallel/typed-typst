// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-regex-word-boundary.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test caseless match and word boundaries.
#show regex("(?i)\\bworld\\b"): [🌍]

Treeworld, the World of worlds, is a world.
