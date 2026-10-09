// Converted from test/suite/corpus/block-clip-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, black, block, doc, em, inline, pt, space, v } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      block(
        { width: em(5), height: em(2), clip: false, stroke: add(pt(1), black) },
        inline`${space}But, soft! what light through${space}`,
      ),
    ),
    inline(v(em(2))),
    inline(
      block(
        { width: em(5), height: em(2), clip: true, stroke: add(pt(1), black) },
        inline`${space}But, soft! what light through yonder window breaks? It is the east, and Juliet is the
sun.${space}`,
      ),
    ),
  )
}
