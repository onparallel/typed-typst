// Converted from test/suite/corpus/block-multiple-pages.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(60) }),
    'First!',
    inline(
      block(inline`${space}But, soft! what light through yonder window breaks? It is the east, and Juliet is the
sun.${space}`),
    ),
  )
}
