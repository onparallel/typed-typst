// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-attached-above-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that attached list isn't affected by block spacing.
#show list: set block(above: 100pt)
Hello
- A
World
- B
