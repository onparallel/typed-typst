// Converted from test/suite/corpus/par-first-line-indent-all-list.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, line, list, m, par, parbreak, pct, pt, set, show, space, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(where(list, { tight: false }), set(list, { spacing: em(1.2) })),
      set(par, { firstLineIndent: { amount: pt(12), all: true }, spacing: pt(5), leading: pt(5) }),
    ),
    m.list(
      { tight: false },
      m.item(['A', space, parbreak(), space, 'B', space, line({ length: pct(100) }), space, 'C']),
      m.item(['D']),
    ),
  )
}
