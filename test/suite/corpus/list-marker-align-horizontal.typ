// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-marker-align-horizontal.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set list(marker: {
  counter("list").update(n => calc.max(n * 10, 1))
  context counter("list").display()
})

- Item
- Item
- Item

#set list(marker-align: start)
#counter("list").update(0)

- Item
- Item
- Item
