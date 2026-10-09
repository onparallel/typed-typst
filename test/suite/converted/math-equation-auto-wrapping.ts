// Converted from test/suite/corpus/math-equation-auto-wrapping.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, math, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(math.attach({ t: inline`b` }, unsafeRaw.math`a`)))
}
