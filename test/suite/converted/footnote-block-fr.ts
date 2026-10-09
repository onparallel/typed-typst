// Converted from test/suite/corpus/footnote-block-fr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, block, doc, footnote, fr, inline, m, page, pct, pt, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(110) }),
      inline`A ${block({ width: pct(100), height: fr(1), fill: aqua }, inline`${space}B ${footnote(inline`I`)} ${footnote(inline`II`)}${space}`)}
C`,
    ),
  )
}
