// Converted from test/suite/corpus/spacing-fr-weak-destructs-rel-abs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, fr, inline, m, page, pt, set, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      inline`0 ${v({ weak: true }, fr(1))} ${v({ weak: true }, em(1))} 1 ${v({ weak: true }, fr(1))} ${v({ weak: true }, em(2))}
2`,
    ),
  )
}
