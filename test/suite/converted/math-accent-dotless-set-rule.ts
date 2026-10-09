// Converted from test/suite/corpus/math-accent-dotless-set-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(math.accent, { dotless: false }), inline(unsafeRaw.math.block`hat(i)`)))
}
