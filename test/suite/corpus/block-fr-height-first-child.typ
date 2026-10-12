// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-fr-height-first-child.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that block spacing is not trimmed if only an fr block precedes it.
#set page(height: 100pt)
#rect(height: 1fr)
#rect()
