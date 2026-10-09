// Converted from test/suite/corpus/spacing-fr-weak-versus-fr-block-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, fr, inline, m, page, pt, set, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      inline`0 ${v({ weak: true }, fr(1))} ${block({ above: fr(2), below: pt(0), height: pt(0) })} 1 ${v({ weak: true }, fr(1))}
2`,
    ),
  )
}
