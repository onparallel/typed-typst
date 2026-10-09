// Converted from test/suite/corpus/issue-1052-math-number-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`10degree \\
10 degree \\
10.1degree \\
10.1 degree`),
  )
}
