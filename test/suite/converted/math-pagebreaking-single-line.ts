// Converted from test/suite/corpus/math-pagebreaking-single-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, inline, m, math, page, set, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: em(4) }), show(math.equation, set(block, { breakable: true }))),
    inline`Shouldn't overflow: ${unsafeRaw.math.block`a + b`}`,
  )
}
