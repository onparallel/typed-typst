// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-recursive-multiple.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test multi-recursion with nested lists.
#set rect(inset: 3pt)
#show list: rect.with(stroke: blue)
#show list: rect.with(stroke: red)
#show list: block

- List
  - Nested
  - List
- Recursive!
