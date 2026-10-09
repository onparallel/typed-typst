// Converted from test/suite/corpus/issue-529-enum-center-alignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, cm, doc, inline, m, page, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: cm(2) }),
      m.enum(m.item(['A']), m.item([align(center, inline`B`)]), m.item([unsafeRaw.math.block`C`])),
    ),
  )
}
