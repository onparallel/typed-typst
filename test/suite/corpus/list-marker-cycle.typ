// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-marker-cycle.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that items are cycled.
#set list(marker: ([--], [•]))
- A
  - B
    - C
