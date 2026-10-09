// Converted from test/suite/corpus/strike-background.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, inline, m, pt, red, set, strike } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(strike, { background: true, stroke: add(pt(5), red) }),
      inline(strike(inline`This is in the background`)),
    ),
  )
}
