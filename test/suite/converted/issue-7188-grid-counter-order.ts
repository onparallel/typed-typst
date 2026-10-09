// Converted from test/suite/corpus/issue-7188-grid-counter-order.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, cm, define, doc, grid, inline, lorem, page, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const wordNumbering = define('word-numbering')
    .pos('body', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let num = counter("_linenumbered")
  let word-label = <_word>
  show word-label: _ => {
    num.step()
    box(width: 0pt, super(numbering("1", num.get().first())))
  }
  show regex("\\\\w+\\\\.?"): it => it + [#metadata(none)#word-label]
  body
}`,
    )
  return doc(set(page, { height: cm(1) }), wordNumbering.decl, inline(grid({ columns: 1 }, wordNumbering(lorem(8)))))
}
