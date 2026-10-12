// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-expand-block.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Lists should shrink to fit their own items inside `auto`-width blocks,
// or expand to the full width of fixed-width containers (/page).
#block[
  - #align(center)[a]
  - bbbb
  - #rect(width: 4em, height: 1em, fill: red)
]

#block(width: 6em)[
  - #align(center)[a]
  - bbbb
  - #rect(width: 4em, height: 1em, fill: red)
]

- #align(center)[a]
- bbbb
- #rect(width: 4em, height: 1em, fill: red)
