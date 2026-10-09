// Converted from test/suite/corpus/math-accent-dotless-greedy.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`arrow(P_(c, i dot j) P_(1, i) j) \\
  arrow(P_(c, i dot j) P_(1, i) j, dotless: #false)`),
  )
}
