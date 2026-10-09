// Converted from test/suite/corpus/issue-5113-pagebreaking-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, m, math, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show(math.equation, set(block, { breakable: true })), inline(math.equation({ block: true }, inline()))),
  )
}
