// Converted from test/suite/corpus/square-size-beyond-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, pt, space, square } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      square(),
      space,
      square({ height: pt(60) }),
      space,
      square({ width: pt(60) }),
      space,
      square({ size: pt(60) }),
    ),
  )
}
