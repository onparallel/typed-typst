// Converted from test/suite/corpus/enum-number-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, inline, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.enum(m.numbered(1, ['first']), m.item(['second']), m.numbered(5, ['fifth'])),
    inline(enum_(enum_.item(1, inline`First`), inline`Second`, enum_.item(5, inline`Fifth`))),
  )
}
