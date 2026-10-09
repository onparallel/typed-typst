// Converted from test/suite/corpus/math-attach-prescripts.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`attach(upright(O), bl: 8, tl: 16, br: 2, tr: 2-),
attach("Pb", bl: 82, tl: 207) + attach(upright(e), bl: -1, tl: 0) + macron(v)_e \\`),
  )
}
