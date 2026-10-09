// Converted from test/suite/corpus/circle-size-beyond-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { circle, doc, inline, pt, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      circle(),
      space,
      circle({ height: pt(60) }),
      space,
      circle({ width: pt(60) }),
      space,
      circle({ radius: pt(30) }),
    ),
  )
}
