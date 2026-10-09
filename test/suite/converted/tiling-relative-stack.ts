// Converted from test/suite/corpus/tiling-relative-stack.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { circle, doc, inline, m, pct, pt, rect, set, stack, tiling } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(rect, { width: pct(100), height: pt(20), fill: tiling({ relative: 'parent' }, circle({ radius: pt(10) })) }),
      inline(stack({ spacing: pt(5) }, rect(), rect())),
    ),
  )
}
