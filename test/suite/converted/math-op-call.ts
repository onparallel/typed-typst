// Converted from test/suite/corpus/math-op-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`&sin x + log_2 x \\
 = &sin(x) + log_2(x)`),
  )
}
