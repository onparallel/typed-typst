// Converted from test/suite/corpus/block-clipping-multiple-pages.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, black, block, doc, em, inline, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(60) }),
    'First!',
    inline(
      block(
        { height: em(4), clip: true, stroke: add(pt(1), black) },
        inline`${space}But, soft! what light through yonder window breaks? It is the east, and Juliet is the
sun.${space}`,
      ),
    ),
  )
}
