// Converted from test/suite/corpus/issue-6170-equation-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, green, inline, pt, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, { stroke: add(green, pt(0.5)) }),
    inline`A ${unsafeRaw.math`B^2`} ${unsafeRaw.math.block`grave(C)'`}`,
  )
}
