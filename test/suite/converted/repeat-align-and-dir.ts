// Converted from test/suite/corpus/repeat-align-and-dir.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, box, center, doc, em, fr, inline, m, rect, repeat, rtl, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`A${box({ width: fr(1) }, repeat(rect({ width: em(6), height: em(0.7) })))}B`,
    m.lines(
      set(align, { alignment: center }),
      inline`A${box({ width: fr(1) }, repeat(rect({ width: em(6), height: em(0.7) })))}B`,
    ),
    m.lines(
      set(text, { dir: rtl, font: 'Noto Sans Arabic' }),
      inline`ريجين${box({ width: fr(1) }, repeat(rect({ width: em(4), height: em(0.7) })))}سون`,
    ),
  )
}
