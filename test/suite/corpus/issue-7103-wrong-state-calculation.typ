// Typst 0.15.1 test suite: tests/suite/layout/grid/grid.typ, case issue-7103-wrong-state-calculation.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(paper: "a10")

#let st = state("st", 0)

#let fn() = {
  st.update(i => i + 1)
  lorem(11)
  st.update(i => i - 1)
}

#grid(fn())

#fn()

Result: #context st.get()
