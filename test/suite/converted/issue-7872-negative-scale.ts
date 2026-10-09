// Converted from test/suite/corpus/issue-7872-negative-scale.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, pct, scale, set, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      scale({ x: pct(-100), y: pct(-101) }, inline`hey`),
      space,
      scale({ x: pct(-100), y: pct(-100) }, inline`hey`),
      space,
      set(text, { size: em(-1) }),
      space,
      scale({ x: pct(-100), y: pct(-100) }, inline`hey`),
    ),
  )
}
