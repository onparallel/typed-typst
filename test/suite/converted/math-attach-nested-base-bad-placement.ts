// Converted from test/suite/corpus/math-attach-nested-base-bad-placement.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`// \`b:2\` in the middle attach used to stop \`b:4\` from moving inward.
  attach(attach(attach(a, t: 1), b: 2), t: 3, b: 4)
  quad
  attach(attach(b, t: 1, b: 2), t: 3, b: 4)`),
  )
}
