// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-marker-closure.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test function.
#set list(marker: n => if n == 1 [--] else [•])
- A
- B
  - C
  - D
    - E
- F
