// Converted from test/suite/corpus/issue-flow-trailing-leading.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, m, page, pt, set, space, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(60) }),
      inline(
        v(pt(19)),
        space,
        block(inline`${space}But, soft! what light through yonder window breaks? It is the east, and Juliet is the
sun.${space}`),
      ),
    ),
  )
}
