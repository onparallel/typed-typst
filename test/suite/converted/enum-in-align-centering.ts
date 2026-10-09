// Converted from test/suite/corpus/enum-in-align-centering.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, block, blocks, doc, inline, m, right, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      m.enum(m.item([unsafeRaw.math.block`x`])),
      inline(
        align(right, blocks(m.enum(m.item([unsafeRaw.math.block`y`])))),
        space,
        align(right, block(blocks(m.enum(m.item([unsafeRaw.math.block`z`]))))),
      ),
    ),
  )
}
