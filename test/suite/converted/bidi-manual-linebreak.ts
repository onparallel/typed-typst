// Converted from test/suite/corpus/bidi-manual-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'ar', font: ['Noto Sans Arabic', 'PT Sans'] }),
      inline`Life المطر هو الحياة ${linebreak()} الحياة تمطر is rain.`,
    ),
  )
}
