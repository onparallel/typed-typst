// Converted from test/suite/corpus/repeat-dots-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, fr, inline, m, repeat, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'ar', font: ['Libertinus Serif', 'Noto Sans Arabic'] }),
      inline`مقدمة ${box({ width: fr(1) }, repeat(inline`.`))} 15`,
    ),
  )
}
