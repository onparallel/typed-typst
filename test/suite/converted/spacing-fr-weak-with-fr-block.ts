// Converted from test/suite/corpus/spacing-fr-weak-with-fr-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, block, doc, fr, inline, m, page, pt, set, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(150) }),
      inline`0 ${v({ weak: true }, fr(2))} 2 ${v({ weak: true }, fr(1))} ${block({ spacing: pt(0), height: fr(1), fill: aqua }, inline`A`)}
${v({ weak: true }, fr(4))} 8`,
    ),
  )
}
