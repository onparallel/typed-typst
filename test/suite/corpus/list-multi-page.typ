// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-multi-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Markers should only appear on the first page of each item, and further pages
// should be indented.
#set page(width: auto, height: 4em)

- Abc
  def

  ghi
  jkl

  mno
  pqr
- Other
  other

  other
  other
