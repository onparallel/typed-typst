// Converted from test/suite/corpus/math-underover-shells.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`undershell(
  1 + overshell(2 + ..., x + y),
  "all stuff"
)`),
  )
}
