// Typst 0.15.1 test suite: tests/suite/layout/grid/cell.typ, case issue-7188-grid-counter-order.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 1cm)

#let word-numbering(body) = {
  let num = counter("_linenumbered")
  let word-label = <_word>
  show word-label: _ => {
    num.step()
    box(width: 0pt, super(numbering("1", num.get().first())))
  }
  show regex("\\w+\\.?"): it => it + [#metadata(none)#word-label]
  body
}

#grid(
  columns: 1,
  word-numbering(lorem(8))
)
