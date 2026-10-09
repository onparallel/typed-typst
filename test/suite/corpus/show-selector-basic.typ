// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-selector-basic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Override lists.
#show list: it => "(" + it.children.map(v => v.body).join(", ") + ")"

- A
  - B
  - C
- D
- E
