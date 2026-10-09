// Converted from test/suite/corpus/math-attach-descender-collision.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`sup_(x in P_i) quad inf_(x in P_i)`,
      space,
      unsafeRaw.math.block`op("fff",limits: #true)^(y) quad op("yyy", limits:#true)_(f)`,
    ),
  )
}
