// Converted from test/suite/corpus/list-items-context.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, context, doc, inline, m, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      context((ctx) => blocks(m.enum(m.item(['A'])))),
      space,
      context((ctx_2) => blocks(m.enum(m.item(['B'])))),
      space,
      context((ctx_3) => blocks(m.enum(m.item(['C'])))),
    ),
  )
}
