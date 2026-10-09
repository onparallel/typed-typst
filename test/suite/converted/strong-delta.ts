// Converted from test/suite/corpus/strong-delta.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, inline, m, set, strong } from '../../../src/index.ts'

export default () => {
  return doc(
    'Normal',
    m.lines(set(strong, { delta: 300 }), inline(strong(inline`Bold`))),
    m.lines(
      set(strong, { delta: 150 }),
      inline`${strong(inline`Medium`)} and ${strong(inline(contentBlock(inline(strong(inline`Bold`)))))}`,
    ),
  )
}
