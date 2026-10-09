// Converted from test/suite/corpus/issue-7437-math-accent-text-presentation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`accent(x + y, arrow.l.r)`,
      space,
      unsafeRaw.math.block`accent(x + y, "↔")`,
      space,
      unsafeRaw.math.block`accent(x + y, ↔)`,
      space,
      unsafeRaw.math.block`accent(x + y, <->)`,
      space,
      unsafeRaw.math.block`arrow.l.r(x + y)`,
    ),
  )
}
