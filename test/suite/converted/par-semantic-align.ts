// Converted from test/suite/corpus/par-semantic-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  bibliography,
  block,
  blocks,
  doc,
  highlight,
  inline,
  label,
  m,
  par,
  path,
  pct,
  pt,
  ref,
  right,
  set,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(par, highlight),
      show(bibliography, null),
      set(block, { width: pct(100), stroke: pt(1), inset: pt(5) }),
    ),
    inline(bibliography(path('/assets/bib/works.bib'))),
    inline(block(blocks(m.lines(set(align, { alignment: right }), 'Hello')))),
    inline(block(blocks(m.lines(set(align, { alignment: right }), inline`Hello ${ref(label('netwok'))}`)))),
    inline(block(inline`${space}Hello ${align(right, inline`World`)} You${space}`)),
    inline(block(inline`${space}Hello ${align(right, inline(ref(label('netwok'))))} You${space}`)),
  )
}
